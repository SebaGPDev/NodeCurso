const express = require("express");
const app = express();

const { infoCursos } = require("./cursos.js");

// console.log(infoCursos)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});
app.get("/api/cursos/programacion", (req, res) => {
  res.send(JSON.stringify(infoCursos.Programacion));
});
app.get("/api/cursos/matematica", (req, res) => {
  res.send(JSON.stringify(infoCursos.Matematicas));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
