$(function () {
  const socket = io();

  // Obtención los elementos del DOM desde la interfaz
  const $messageForm = $("#message-form");
  const $messageBox = $("#message");
  const $chat = $("#chat");

  // Obtención de elementos desde el nickname form
  const $nickForm = $("#nick-form");
  const $nickError = $("#nick-error");
  const $nickname = $("#nickname");

  // Obtención del elemento usernames
  const $usernames = $("#usernames");

  // Capturando los eventos:
  $nickForm.submit((e) => {
    e.preventDefault();

    // Escuchando como ingresa un nuevo usuario con web sockets:
    socket.emit("new user", $nickname.val(), (data) => {
      // Si data is true:
      if (data) {
        $("#nick-wrap").hide();
        $("#content-wrap").show();
        // Si no, muestra el error de que el usuario ya está tomado
      } else {
        $nickError.html(`
          <div class="alert alert-danger">
            Este usuario ya existe
          </div>
        `);
      }
      // Limpiamos el input
      $nickname.val("");
    });
  });

  // Capturando los eventos:
  $messageForm.submit((e) => {
    e.preventDefault();

    // Obtener el valor de las variables y enviandolas al socket id = send message
    socket.emit("send message", $messageBox.val());
    $messageBox.val("");
  });

  // Escuchar evento que viene del servidor sockets y mostrandolo en el chat
  socket.on("new message", function (data) {
    $chat.append(
      `<b><i class="fa-regular fa-comment-dots"></i> ${data.nick}</b>: ${data.msg} <br/>`
    );
  });

  // Escucha evento de envio de nicknames
  socket.on("usernames", (data) => {
    let html = ""; // Variable para almacenar todos los usuarios
    for (let i = 0; i < data.length; i++) {
      html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`; // Recorriendo arreglo para mostrarlo
    }
    $usernames.html(html); // Se añaden las etiquetas p para mostrarlas por pantalla
  });
});
