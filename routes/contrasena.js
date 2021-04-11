//rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const contrasenaController = require('../controllers/contrasenaController');


//Iniciar sesion usuario
//Api/auth
router.post('/',
  [
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('correo', 'El correo es obligatorio').not().isEmpty()

  ],
  contrasenaController.validarUsuario
);



module.exports = router;
