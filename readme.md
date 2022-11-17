## Requerimientos:

### Para el servidor:
Para el debido funcionamiento del proyecto, se debe instalar una versión
actualizada de nodejs, después de esto, se instalaron las siguientes dependencias

1. express (npm install express) -> Framework encargado de escribir el codigo del servidor
    de una forma más sencilla. Reutilización de código ya probado y testeado.
2. socket.io (npm install socket.io) -> Protocolo de web sockets que permite la conexión
    para la aplicacion web stainless, cuando un usuario entra a la aplicacion, pide algo
    el servidor responde y ahi acaba la conexion, en el caso del chat, es necesario que haya
    una conexion con el servidor y el cliente continuamente, esto se hace gracias a websockets
3. nodemon (npm install nodemon -D) -> Modulo de utilidades para la ejecucion del script
4. Biblioteca JQuery para la obtención de los mensajes


### Para el Frontend:
1. Para el fondo del body, fue sacado de https://uigradients.com/#Horizon
2. Para el diseño del front se utilizó el CDN de bootstrap
3. Para los iconos del front se utilizó el CDN de fontawesome

## Funcionamiento:

### Ejecucion:

- npm start

### Hosting:

- La script está corriendo en Heroku, un Paas (Plataform as a Service) donde se pueden alojar proyectos gratuitamente.

**Link:** https://chatwebsocketsbrandddd.herokuapp.com/
