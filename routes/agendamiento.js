//rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const agendamientoController = require('../controllers/agendamientoController');


router.post('/',
  [
    check('documento', 'El documento es obligatorio').not().isEmpty(),

  ],
  agendamientoController.validarUsuario
);



module.exports = router;
