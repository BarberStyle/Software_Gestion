'use strict'

const mongoose = require('mongoose');


const ProductosSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    precio: {
        type: Number,
        require: true,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    },
    disponibles: {
        type: Number,
        require: true,
        trim: true
    },
    estado: {
        type: String,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductosSchema);
// productos --> guarda los documents en la coleccion
