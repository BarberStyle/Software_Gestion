
const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/preguntaController');




//consultar preguntas
router.get('/',
    preguntaController.obtenerPreguntas

);

router.post('/',

    preguntaController.validarPregunta

);


module.exports = router;