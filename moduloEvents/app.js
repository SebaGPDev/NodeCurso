const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

//evento
emisorProductos.on('compra', (total) => {
    console.log(`Se realizo una compra, acaba de gastar $ ${total}`);
})

//emisor
emisorProductos.emit('compra', '10'); 

// Funciones que manejan los eventos se las conoce como event handlers
