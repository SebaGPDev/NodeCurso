const fs = require("fs");

//Metodos Asincoronos

//readFile (Leer Archivo)
// fs.readFile("Script.js", "utf8", (error, contenido) => {
//   if (error) {
//     console.log(error);
//     //Me devuelve mas detalles del error y detiene la ejecución del programa
//     // throw error;
//   } else {
//     console.log(contenido);
//   }
//   console.log("Mensaje...");
// });

//rename(cambiar nombre archivo)
// fs.rename('Scripts.js','main.js', (error) => {
//     if (error) {
//     throw error;
//     }
//     console.log('Nombre cambiado exitosamente');
// });

//Agregar contenido al final de un achivo
// fs.appendFile('Scripts.js', 'console.log("Tengo Sueno")', (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("Archivo Actualizado");
// });

//Reemplazar todo el contenido del archivo
// fs.writeFile("Scripts.js", 'console.log("Chau Mundo")', (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("Contenido Nuevo");
// });

//Eliminar Archivos
// fs.unlink("scripts2.js", (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("Archivo Eliminado");
// });

//Metodos Sincronos

//readFile (Leer Archivo)
// const archivo = fs.readFileSync("Scripts.js", "utf8");
// console.log(archivo);

//rename(cambiar nombre archivo)
// fs.renameSync('Scripts.js','main.js');


//Agregar contenido al final de un achivo
// fs.appendFileSync('Scripts.js', 'console.log("Tengo Sueno")');


//Reemplazar todo el contenido del archivo
// fs.writeFileSync("Scripts.js", 'console.log("Chau Mundo")');

//Eliminar Archivos
// fs.unlinkSync("scripts2.js");