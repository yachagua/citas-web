module.exports = async function (context, req) {
    const cita = req.body;

    context.log("Cita recibida:", cita);

    context.res = {
        status: 200,
        body: `Cita guardada para ${cita.nombre} en ${cita.servicio}`
    };
};
