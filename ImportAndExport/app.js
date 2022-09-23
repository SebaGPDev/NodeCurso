import express from "express";

// import sayHi from './module.js';
import {sayHi} from './module.js';

const app = express();
console.log(sayHi('seba'));

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
