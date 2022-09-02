function saludar(nombre) {
	return `Hola ${nombre}`;
}
// console.log(module.exports = saludar);
console.log(module.exports.saludar = saludar);