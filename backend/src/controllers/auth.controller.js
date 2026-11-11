
const AuthService = require('../services/auth.service');
const prisma = require('../config/prisma');

const COOKIE_NAME = 'palayenti_admin_token';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  path: '/'
};

const authController = {
  async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          mensaje: 'Ingresa tu usuario y contraseña.'
        });
      }

      const result = await AuthService.login(username, password);

      if (!result) {
        return res.status(401).json({
          mensaje: 'Usuario o contraseña incorrectos.'
        });
      }

      res.cookie(COOKIE_NAME, result.token, {
        ...cookieOptions,
        maxAge: 8 * 60 * 60 * 1000
      });

      return res.json({
        mensaje: 'Inicio de sesión correcto.',
        admin: result.admin
      });

    } catch (error) {
      console.error('Error en login:', error);

      return res.status(500).json({
        mensaje: 'Error interno al iniciar sesión.'
      });
    }
  },

  logout(req, res) {
    res.clearCookie(COOKIE_NAME, cookieOptions);

    return res.json({
      mensaje: 'Sesión cerrada correctamente.'
    });
  },


  async me(req, res) {
    try {
      const token = req.cookies[COOKIE_NAME];

      if (!token) {
        return res.status(401).json({
          mensaje: 'No hay una sesión activa.'
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
          displayName: true,
          active: true
        }
      });

      if (!admin || !admin.active) {
        res.clearCookie(COOKIE_NAME, cookieOptions);

        return res.status(401).json({
          mensaje: 'La cuenta administrativa ya no está activa.'
        });
      }

      return res.json({
        autenticado: true,
        admin: {
          id: admin.id,
          username: admin.username,
          displayName: admin.displayName
        }
      });

    } catch (error) {
      res.clearCookie(COOKIE_NAME, cookieOptions);

      return res.status(401).json({
        mensaje: 'La sesión no es válida o ha expirado.'
      });
    }
  }

};

module.exports = authController;
