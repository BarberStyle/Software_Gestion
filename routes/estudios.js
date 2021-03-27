const express = require('express');
const router = express.Router();
const estudioController = require('../controllers/estudioController');
const auth = require('../middleware/auth');

router.post('/',
    auth,
    estudioController.crearEstudio
);

module.exports = router;