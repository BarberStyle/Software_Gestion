'use strict'

const mongoose = require('mongoose');


const CodigoSchema = mongoose.Schema({
    codigoNum: {
        type: String,
        require: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Codigo', CodigoSchema);

