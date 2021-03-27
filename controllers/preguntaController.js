const { isValidObjectId } = require('mongoose');
const Pregunta = require('../models/Pregunta');
const Respuesta = require('../models/Respuesta');
const Usuario = require('../models/Usuario');




exports.obtenerPreguntas = async (req, res) => {
    try {
        const pregunta = await Pregunta.find({});
        res.json({ pregunta });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.validarPregunta = async (req, res) => {

    const { doc, preg, resp } = req.body;
    console.log(req.body);

    try {
        let usuario = await Usuario.findOne({ documento: doc });

        if (!usuario) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        const respuestas = await Respuesta.find({ idUsuario: usuario._id });
        console.log(respuestas[0].idPregunta);

        if (respuestas[0].idPregunta != preg) {
            return res.status(400).json({ msg: 'La pregunta es incorrecta' });
        }


        if (respuestas[0].respuesta != resp) {
            return res.status(400).json({ msg: 'La respuesta es incorrecta' });

        }

        res.json({ respuestas });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

