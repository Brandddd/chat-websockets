module.exports = function (io) {
  // Cada que haya una nueva conexión, io se quedará escuchando lo que pase
  io.on("connection", (socket) => {
    console.log("Nuevo usuario conectado.");

    // Recibiendo mensaje del servidor
    socket.on("send message", function (data) {
      // Los mensajes se reenvian atraves de este metodo id = new message
      io.sockets.emit("new message", data);
    });
  });
};
