$(function () {
  const socket = io();

  // Obtención los elementos del DOM desde la interfaz
  const $messageForm = $("#message-form");
  const $messageBox = $("#message");
  const $chat = $("#chat");

  // Capturando los eventos:
  $messageForm.submit((e) => {
    e.preventDefault();

    // Obtener el valor de las variables y enviandolas al socket id = send message
    socket.emit("send message", $messageBox.val());
    $messageBox.val("");
  });
  
  // Escuchar evento que viene del servidor sockets y mostrandolo en el chat
  socket.on("new message", function (data) {
    $chat.append(data + '</br>');
  });
});
