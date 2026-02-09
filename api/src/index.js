module.exports = async function (context, req) {
  context.log('Procesando datos del formulario...');

  // Capturar datos enviados en el body
  const nombre = req.body?.nombre || "Sin nombre";
  const correo = req.body?.correo || "Sin correo";
  const mensaje = req.body?.mensaje || "Sin mensaje";

  // Aquí puedes guardar en base de datos, enviar correo, etc.
  context.res = {
    status: 200,
    body: { success: true, message: "Datos recibidos correctamente", data: { nombre, correo, mensaje } }
  };
};
