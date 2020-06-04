const app = require('express')();
const http = require('http').Server(app); const io = require('socket.io')(http);
const chat = [];

io.on("connection", socket => {

    socket.on("writeChat", mensaje => {
        chat.push(mensaje);

        io.emit("chat", chat);

    });

    socket.on("readChat", () => {
        io.emit("chat", chat);
    });

    io.emit("chat", chat);

});

http.listen(8585);
console.log("El servidor esta corriendo en el puerto 8585...");
