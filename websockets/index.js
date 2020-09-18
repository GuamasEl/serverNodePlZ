const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('../public'));

setInterval(function(){
    io.emit('mensaje', 'Hello a tous');
},3000);

io.on('connection', function(socket){
    console.log('Nuevo cliente');
    socket.emit('mensaje', 'bienvenido');
});

server.listen(8080, function(){
    console.log('Servidor iniciado');
});