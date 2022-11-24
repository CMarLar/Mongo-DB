/*
INNECESARIO PARA TRABAJAR CON MONGOOSE

const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos

*/

//Importamos el modelo con el que vamos a trabajar, definido en el archivo de la carpeta model:
const PhotoModel = require("../model/photo")


//GET//

function getPhoto(request, response)
{
    if(request.query.username == null){
        PhotoModel.find({})//vacío para mostrar TODAS las fotos
        .then((photo) =>{
            console.log(photo);
            response.send(photo);
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1);//Si hay un error, se sale del servidor.
        })
    }else{
        //en Postman hay que meterlo así:  /photos?username=Carlos
                                        // /photos?username=Carlos&title=Titulo
        console.log(request.query.username);
        PhotoModel.findOne({"username": request.query.username})
        .then((photo)=>{
            console.log(photo);
            response.send(photo);
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1)
        })
    }
}

function postPhoto(request,response)
{
    console.log(request.body);

    let photo = new PhotoModel
    ({
        username:request.body.username,
        url:request.body.url,
        title:request.body.title,
        description:request.body.description
    })
    photo.save()

    .then((photo)=>{
        console.log("Nueva foto guardada");
        console.log(photo);
        response.send(photo)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function putPhoto(request,response)
{
    console.log(request.body);

    PhotoModel.findOneAndUpdate
    //({campo que se se pide},{campo que se va a modificar})
    ({title:request.body.title},{description:request.body.description})//cierra paréntesis de findByIDAndUpdate
    
    .then((photo)=>{
        console.log("Foto actualizada");
        response.send(photo)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function deletePhoto(request,response)
{
    if(request.body.title != null){
        console.log(request.body);
        PhotoModel.deleteOne({username: request.body.username, title: request.body.title })
        .then((photo)=>{
            console.log("Foto borrada");
            response.send(photo)
        })
        .catch((err) =>{
            console.log(err);
        })
    }else{
        PhotoModel.deleteMany({username: request.body.username})
        .then((photo)=>{
            console.log("Todas las fotos del usuario " + request.body.username + " han sido eliminadas");
            response.send(photo)
        })
        .catch((err) =>{
            console.log(err);
        })
    }
}




module.exports = {getPhoto,postPhoto,putPhoto,deletePhoto}
