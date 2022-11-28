const express = require ('express');
const cors = require ('cors');
//CORS: capa de seguridad para el front.
//Importa las rutas y los errores:

//Importaciones de archivo routers
const proRouters = require("./routers/professional.routers");//-----CAMBIAR-----//
const movieRouters = require("./routers/movie.routers")
const errorHandling = require("./error/errorHandling");

//Ahora llamamos a la variable express que tiene como valor la importación de express.
//Con app.método(), accedemos a los métodos propios de express, que están en la variable app (app es un objeto):
const app = express();

//Determina las variables de entorno de node y si no hay, marca el puerto 3000:
app.set("port",process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());//esta y la anterior cambia los body automáticamente .json.

//Referencias a routers
app.use(proRouters);//-----CAMBIAR-----//
app.use(movieRouters);
app.use(function (req,res,next){
    res.status(404).json({error: true, codigo: 404, mensaje: "Endpoint not found"})//si no encuentra el endpoint, lanza este error
});

app.use(errorHandling);

module.exports = app;