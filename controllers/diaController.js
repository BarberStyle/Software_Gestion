const Dia = require('../models/Dia');


exports.obtenerDias = async (req, res) => {
    try {
        const dias = await Dia.find({});
        res.json({ dias });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


//registra empleados en la bd
exports.crearDia = async (req, res) => {

    const { id, nombre } = req.body;

    try {

        dia = new Dia(req.body);
        console.log(dia.nombre);
        await dia.save();
        res.json(dia);

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }


}


exports.eliminarDia = async (req, res) => {

   
    var diaId = req.params.id;

    Dia.findByIdAndRemove(diaId, (err, dayRemoved) => {
        if (err) return res.status(500).send({ message: 'No se ha podido borrar el dia' });

        if (!dayRemoved) return res.status(404).send({ message: "No se puede eliminar este dia." });

        return res.status(200).send({
            dia: dayRemoved
        });
    });
}