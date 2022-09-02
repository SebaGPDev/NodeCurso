// const saludos = require('./saludos.js');
// console.log(saludos.saludar('Sebastian'));

//Sintaxis de desestructuracion: Nos permite tomar ciertas propiedades de los objetos en JS, de forma muy concisa

//Asi para una sola propiedad del objeto
// const {saludarHolaMundo} = require('./saludos');

//Asi para varias propiedades de ese objeto
const {saludar, saludarHolaMundo} = require('./saludos');

console.log(saludar('Sebastian'));
console.log(saludarHolaMundo());