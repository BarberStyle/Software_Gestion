const Usuario = require('../models/Usuario');
const Respuesta = require('../models/Respuesta');
const { validationResult } = require('express-validator');

exports.validarUsuario = async (req, res) => {


    //revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log(errores);
        return res.status(400).json({ errores: errores.array() });
    }

    const { documento } = req.body;
    try {

        //revisar que el usuario si exista
        let usuario = await Usuario.findOne({ documento });
        if (!usuario) {
            return res.status(400).json({ msg: 'EL USUARIO NO ESTA REGISTRADO' });
        }
        
        //confirmacion
        res.json(usuario);


    } catch (error) {
        console.log(error);
        res.status(400).send('HUBO UN ERROR');
    }

}
