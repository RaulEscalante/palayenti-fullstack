
const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

// Iniciar sesión
router.post('/login', authController.login);

// Cerrar sesión
router.post('/logout', authController.logout);

// Consultar sesión actual
router.get('/me', authController.me);

module.exports = router;
