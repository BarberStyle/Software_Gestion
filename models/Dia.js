'use strict'

const mongoose = require('mongoose');


const DiasSchema = mongoose.Schema({
	id: {
        type: Number,
        require: true,
        unique:true,
        trim: true
    },
    nombre: {
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('Dia', DiasSchema);

