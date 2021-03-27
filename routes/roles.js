const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');



//Api/servicios  --crea servicio
router.post('/',
    rolesController.crearRol
);


module.exports = router;