'use strict'

const mongoose = require('mongoose');


const ExperienciaSchema = mongoose.Schema({
    experiencia: {
        type: String,
        require: true,
        trim: true
    },
    nombreEmpresa: {
        type: String,
        require: true,
        trim: true
    },
    fechaFin: {
        type: Date,
        require: true,
        trim: true
    },
    fechaFin: {
        type: Date,
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


module.exports = mongoose.model('Experiencia', ExperienciaSchema);

