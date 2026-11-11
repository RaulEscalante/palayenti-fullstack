
const readline = require('readline');
const bcrypt = require('bcryptjs');
const prisma = require('../src/config/prisma');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

function askPassword(question) {
    return new Promise((resolve) => {
        process.stdout.write(question);

        const stdin = process.stdin;
        let password = '';

        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');

        function onData(char) {
            if (char === '\u0003') {
                process.stdout.write('\n');
                process.exit();
            }

            if (char === '\r' || char === '\n') {
                stdin.setRawMode(false);
                stdin.pause();
                stdin.removeListener('data', onData);
                process.stdout.write('\n');
                resolve(password);
                return;
            }

            if (char === '\u007f' || char === '\b') {
                password = password.slice(0, -1);
                return;
            }

            password += char;
        }

        stdin.on('data', onData);
    });
}

async function createAdmin() {
    try {
        const username = (await ask('Nombre de usuario: ')).trim();
        const displayName = (await ask('Nombre para mostrar: ')).trim();
        const password = await askPassword('Contraseña: ');
        const confirmPassword = await askPassword('Confirmar contraseña: ');

        if (!username || !displayName || !password) {
            console.log('Todos los campos son obligatorios.');
            return;
        }

        if (password.length < 8) {
            console.log('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            console.log('Las contraseñas no coinciden.');
            return;
        }

        const existingAdmin = await prisma.admin.findUnique({
            where: { username }
        });

        if (existingAdmin) {
            console.log('Ese nombre de usuario ya está registrado.');
            return;
        }

        const passwordHash = await bcrypt.hash(password, 12);

        await prisma.admin.create({
            data: {
                username,
                displayName,
                passwordHash
            }
        });

        console.log('\nAdministrador creado correctamente.');
    } catch (error) {
        console.error('Error al crear administrador:', error.message);
    } finally {
        rl.close();
        await prisma.$disconnect();
    }
}

createAdmin();
