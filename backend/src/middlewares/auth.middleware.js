
const AuthService = require('../services/auth.service');
const prisma = require('../config/prisma');

const COOKIE_NAME = 'palayenti_admin_token';

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
};

async function verifyAuth(req, res, next) {
    try {
        const token = req.cookies[COOKIE_NAME];

        if (!token) {
            return res.status(401).json({
                mensaje: 'Debes iniciar sesión para continuar.'
            });
        }

        const payload = AuthService.verifyToken(token);

        const admin = await prisma.admin.findUnique({
            where: {
                id: payload.adminId
            },
            select: {
                id: true,
                username: true,
                active: true
            }
        });

        if (!admin || !admin.active) {
            res.clearCookie(COOKIE_NAME, cookieOptions);

            return res.status(401).json({
                mensaje: 'La cuenta administrativa ya no está activa.'
            });
        }

        req.admin = {
            id: admin.id,
            username: admin.username
        };

        next();

    } catch (error) {
        res.clearCookie(COOKIE_NAME, cookieOptions);

        return res.status(401).json({
            mensaje: 'La sesión no es válida o ha expirado.'
        });
    }
}

module.exports = verifyAuth;
