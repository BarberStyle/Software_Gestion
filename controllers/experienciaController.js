const Experiencia = require('../models/Experiencia');



exports.crearExperiencia = async (req, res) => {


    try {

        //crea el nuevo servicio
        let experiencia = new Experiencia(req.body);

        await experiencia.save();

        res.json(experiencia);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }


}