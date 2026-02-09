module.exports = async function (context, req) {
  const nombre = req.body?.nombre || "Sin nombre";
  const servicio = req.body?.servicio || "Sin servicio";
  const fecha = req.body?.fecha || "Sin fecha";
  const hora = req.body?.hora || "Sin hora";

  const mensaje = `Cita recibida: ${nombre}, servicio: ${servicio}, fecha: ${fecha}, hora: ${hora}`;

  context.res = {
    status: 200,
    headers: { "Content-Type": "text/plain" },
    body: mensaje
  };
};