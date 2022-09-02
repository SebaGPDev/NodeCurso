function saludar(nombre) {
	return `Hola ${nombre}`;
}

function saludarHolaMundo(){
	return 'Hola Mundo';
}

//Formas de exportar

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
	saludar: saludar,
	saludarHolaMundo: saludarHolaMundo
};