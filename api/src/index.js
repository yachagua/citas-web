module.exports = async function (context, req) {
  context.log('Procesando datos del formulario...');

  const nombre = req.body?.nombre || "Sin nombre";
  const servicio = req.body?.servicio || "Sin servicio";
  const fecha = req.body?.fecha || "Sin fecha";
  const hora = req.body?.hora || "Sin hora";

  const cita = { nombre, servicio, fecha, hora };

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { success: true, message: "Cita recibida correctamente", data: cita }
  };
};