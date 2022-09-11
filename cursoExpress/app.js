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

// app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
//   const lenguaje = req.params.lenguaje;
//   const resultado = infoCursos.Programacion.filter(
//     (programacion) => programacion.lenguaje === lenguaje
//   );
//   if (resultado.length === 0) {
//     return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
//   }
//   res.send(JSON.stringify(resultado));
// });

app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.Programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  res.send(JSON.stringify(resultados));
});

app.get("/api/cursos/matematicas/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.Matematicas.filter(
    (curso) => curso.tema === tema
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  res.send(JSON.stringify(resultados));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
