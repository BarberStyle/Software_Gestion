const Puntos= require('../models/Puntos');


exports.ingresarPuntos= async (req, res) => {
 
    try {
        //crea los puntos
        let puntos= new Puntos(req.body);
        await puntos.save();
        res.json(puntos);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

exports.obtenerPuntos = async (req, res) => {
    try {
        const puntos = await Puntos.find({});
        res.json({ puntos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


