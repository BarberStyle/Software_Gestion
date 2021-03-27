'use strict'

const mongoose = require('mongoose');


const PreguntaSchema = mongoose.Schema({
    Pregunta: {
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('Pregunta', PreguntaSchema);

