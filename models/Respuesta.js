'use strict'

const mongoose = require('mongoose');


const RespuestaSchema = mongoose.Schema({
    idPregunta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pregunta'
    },
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    respuesta: {
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('Respuesta', RespuestaSchema);



