const Usuario = require('../models/Usuario');
const Codigo = require('../models/Codigo');
const uuidv1 = require('uuid/v1');
const { validationResult } = require('express-validator');



exports.validarUsuario = async (req, res) => {


    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log(errores);
        return res.status(400).json({ errores: errores.array() });
    }

    const { documento, correo } = req.body;

    try {

        //revisar que el usuario si exista
        let usuario = await Usuario.findOne({ documento, correo });

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        //crear nuevo codigo
        let codigo = new Codigo();


        //asignacion de valores al codigo
        codigo.codigoNum = uuidv1();
        codigo.idUsuario = usuario._id;

        //guarda codigo en la DB
        await codigo.save();

        console.log(codigo);

        //confirmacion
        // res.json({ usuario });


    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }

}



