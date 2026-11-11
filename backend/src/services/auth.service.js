
const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(username, password) {
    const admin = await prisma.admin.findUnique({
        where: { username }
    });

    // No revelar si el usuario existe o no
    if (!admin || !admin.active) {
        return null;
    }

    const passwordValid = await bcrypt.compare(
        password,
        admin.passwordHash
    );

    if (!passwordValid) {
        return null;
    }

    const token = jwt.sign(
        {
            adminId: admin.id,
            username: admin.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || '8h'
        }
    );

    return {
        token,
        admin: {
            id: admin.id,
            username: admin.username,
            displayName: admin.displayName
        }
    };
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    login,
    verifyToken
};
