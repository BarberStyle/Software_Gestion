'use strict'

const mongoose = require('mongoose');


const EstudioSchema = mongoose.Schema({
    titulo: {
        type: String,
        require: true,
        trim: true
    },
    centro: {
        type: String,
        require: true,
        trim: true
    },
    tiempo: {
        type: String,
        require: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    idEmpleado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empleado'
    }
});

module.exports = mongoose.model('Estudio', EstudioSchema);

