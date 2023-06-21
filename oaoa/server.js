//En este codigo es un servidor de node.js que se utiliza la libreria express es un framework de aplicaciones web para Node.js que proporciona una serie de funcionalidades utiles para crear aplicaciones web y APIs
//En este codigo se hcen varias cosas
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//se importa la libreria express y se crea una aplicacion de exprees llamada "app"
//se importa el modulo "path" de Node.js y se crea una instancia de la clase router de express
//se habilitan los middlewares de express para el manejo de los datos JSON y datos codificados en el cuerpo de las solicitudes
//se crean varias rutas utilizando el metodo "get" del router. Cada ruta tiene una direccion URL diferente y envia un archivo HTML, diferente al cliente dcuando se accedde a esa direccion
// se crea una ruta que utiliza del metodo "post" del router. Esta ruta recibe una solicitud POST y envia un mensaje de respuesta al cliente con los datos del cuerpo de la solicitud
//se asigna el router a la aplicacion de express y se especifica que la explicacion escuchara en el puerto 8080 (o en el puerto especificado en la variable del entorno port)

app.use(express.json());
app.use(express.urlencoded({extend: true}));

router.get("/", (req, res) =>{
    res.sendFile(path.join(___dirname + '/index.html'))
});
router.get("/contacto", (req, res) =>{
    res.sendFile(path.join(___dirname + '/templates/contacto.html'))
});
router.get("/perfil", (req, res) =>{
    res.sendFile(path.join(___dirname + '/templates/perfil.html'))
});

router.post("/", (req, res) =>{
    res.send("el usuario "+ req.body,first_name + " ha sido registrado");
})

app.use("/", router);
app.listen(process.env.port || 8080);
console.log("Activo en el puerto 8080");


