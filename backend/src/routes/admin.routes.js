
const express = require('express');
const verifyAuth = require('../middlewares/auth.middleware');

const router = express.Router();

// Ruta privada de prueba
router.get('/test', verifyAuth, (req, res) => {
    res.json({
        mensaje: 'Acceso autorizado al área administrativa.',
        admin: req.admin
    });
});

module.exports = router;
