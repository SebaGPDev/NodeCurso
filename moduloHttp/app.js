const http = require("http");

//Request
// const servidor = http.createServer((req, res) => {
//   res.end("Hola Mundo");
//   console.log('Request:');
//   console.log(req);
// console.log(req.url);
// console.log(req.method);
// console.log(req.headers);
// });

//Response
// const server = http.createServer((req, res) => {
//   console.log("Response:");
//   //   console.log(res);
//   console.log(res.statusCode);
//   res.statusCode = 404;
//   console.log(res.statusCode);
//   res.setHeader("Content-Type", "application/json");
//   console.log(res.getHeaders());
// });

const PUERTO = 3000;

server.listen(PUERTO, () => {
  console.log("Servidor listening on http://localhost:3000");
});
