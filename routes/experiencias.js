const express = require('express');
const router = express.Router();
const experienciasController = require('../controllers/experienciaController');
const auth = require('../middleware/auth');

router.post('/',
  auth,
  experienciasController.crearExperiencia
);

module.exports = router;