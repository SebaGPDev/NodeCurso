const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Nodemon Funciona");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Servidor listening on http://localhost:3000");
});
