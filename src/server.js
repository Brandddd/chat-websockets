const http = require("http");
const path = require("path");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app); //Modulo http me sirve para la creacion del servidor y poner ejecutar los sockets sobre este
const io = socketio(server); // Asi podemos crear el socket para que nos escuche lo que esta pasando dentro de la pagina

// Configuracion de despliegue
app.set("port", process.env.PORT || 3000);

require("./sockets")(io); //Paso como parametro a sockets.js

// Enviando archivos estaticos, en este caso la carpeta public que no cambiará
app.use(express.static(path.join(__dirname, "public"))); // Para concatenar dos direcciones

// Iniciando el servidor
server.listen(app.get("port"), () => {
  console.log("Ejecutando servidor en el puerto", app.get("port"));
}); // Listen escucha el servidor que esté alojado en algun puerto del equipo
