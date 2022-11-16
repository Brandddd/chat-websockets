module.exports = function (io) {
  let nicknames = [];

  // Cada que haya una nueva conexión, io se quedará escuchando lo que pase
  io.on("connection", (socket) => {
    console.log("Nuevo usuario conectado.");

    socket.on("new user", (data, cb) => {
      // No pueden haber usuarios con el mismo nombre
      if (nicknames.indexOf(data) != -1) {
        console.log(data);
        // Ya hay un usuario con este nombre
        cb(false);
      } else {
        // Registra el usuario dentro del arreglo
        // Asigna el nickname a un socket
        cb(true);
        socket.nickname = data;
        nicknames.push(socket.nickname);
        // Enviar evento a todos los usuarios de que alguien se conectó
        updateNicknames();
      }
    });

    // Recibiendo mensaje del servidor
    socket.on("send message", data => {
      // Los mensajes se reenvian atraves de este metodo id = new message
      io.sockets.emit("new message", {
        msg: data,
        nick: socket.nickname
      });

    });

    // Desconexión se sockets o usuarios
    socket.on("disconnect", (data) => {
      if (!socket.nickname) return;
      nicknames.splice(nicknames.indexOf(socket.nickname), 1);
      updateNicknames();
    });

    // Funcion que actualiza los nicknames
    function updateNicknames() {
      io.sockets.emit("usernames", nicknames);
    }
  });
};
