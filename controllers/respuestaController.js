const Respuesta = require('../models/Respuesta');
const Pregunta = require('../models/Pregunta')



exports.crearRespuesta = async (req, res) => {


    try {

        //crea la nueva respuesta
        let respuesta = new Respuesta(req.body);
       
        await respuesta.save();

        res.json(respuesta);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }


}