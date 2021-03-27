
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const diasController = require('../controllers/diaController');




//consultar dias
router.get('/',
  diasController.obtenerDias

);

router.post('/',
  diasController.crearDia
);

router.delete('/:id',
   diasController.eliminarDia
)
module.exports = router;