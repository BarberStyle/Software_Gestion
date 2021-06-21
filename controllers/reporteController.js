const Cita = require('../models/Cita');

exports.generarConsulta= async (req, res) => {

    const { fechaInicio, fechaFinal } = req.body;
    console.log(fechaInicio, fechaFinal)

    try {
        let citas = await Cita.find({
            $expr: {
                $and: [
                    { $gte: [{ $year: "$horaInicio" }, { $year: new Date(fechaInicio) }] },
                    { $gte: [{ $month: "$horaInicio" }, { $month: new Date(fechaInicio) }] },
                    { $gte: [{ $dayOfMonth: "$horaInicio" }, { $dayOfMonth: new Date(fechaInicio) }] },
                    { $lte: [{ $year: "$horaInicio" }, { $year: new Date(fechaFinal) }] },
                    { $lte: [{ $month: "$horaInicio" }, { $month: new Date(fechaFinal) }] },
                    { $lte: [{ $dayOfMonth: "$horaInicio" }, { $dayOfMonth: new Date(fechaFinal) }] }
                ],
            }
        });

        console.log(citas);

        res.json(citas);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }


}

/* exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.json({ productos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

} */
