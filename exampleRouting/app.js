const http = require("http");

const curso = require("./curso");

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return manejarSolicitudGet(req, res);
    default:
      console.log(`El metodo no puede ser manejado por el servidor ${method}`);
  }
});

function manejarSolicitudGet(req, res) {
  const path = req.url;
  if (path === "/") {
    res.statusCode = 200;
    res.end("Bienvenido al servidor");
  } else if (path === "/curso") {
    res.statusCode = 200;
    res.end(JSON.stringify(curso.infoCurso));
  } else if (path === "/curso/programacion") {
    res.statusCode = 200;
    res.end(JSON.stringify(curso.infoCurso.programacion));
  }
  res.statusCode = 404;
  res.end('El recurso solicitado no existe');
}

const PUERTO = 3000;
server.listen(PUERTO, () => {
  console.log("Servidor listening on http://localhost:3000");
});
