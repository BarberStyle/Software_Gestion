const Estudio = require('../models/estudio');



exports.crearEstudio = async (req, res) => {


    try {

        //crea el nuevo servicio
        let estudio = new Estudio(req.body);

        await estudio.save();

        res.json(estudio);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }


}