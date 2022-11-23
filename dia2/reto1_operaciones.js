//Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’.

const mongoose = require ("mongoose");
let Photo = require ("./reto1_schema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/Dia2Reto1", 
                {useNewUrlParser: false, useUnifiedTopology: false})

function createPhoto (username,url,title,description){
Photo.create({username: username, 
            url: url, 
            title: title, 
            description: description})
.then (()=>{
    console.log("Documento guardado");
})
.catch(()=>{
    console.log("Error al escribir el documento");
})
}

// createPhoto("Paco","http://www.hoala.es/wp-content/uploads/2018/02/paco-conde-240.jpg","Retrato","Una foto de paco")
// createPhoto("Paco","http://www.hoala.es/wp-content/uploads/2018/02/paco-conde-240.jpg","Retrato","Una foto de paco")
// createPhoto("María","http://www.hoala.es/wp-content/uploads/2018/02/paco-conde-240.jpg","Retrato","Una foto de paco")

//Dado un usuario obtener todas sus fotos.
function findPhoto(username){
Photo.findOne({username:username})
.then((items)=>{//ojo, esta promesa sí tiene parámetros
    console.log("Datos recuperados");
    console.log(items);
})
.catch(()=>{
    console.log("Error");
})
}

findPhoto("Paco")

//Dado el titulo de una foto, modificar su descripción.
function updatePhoto(title,description){
Photo.findOneAndUpdate({title: title}, {description: description})
.then((items)=>{//ojo, esta promesa sí tiene parámetros
    console.log("Datos Modificados");
    console.log(items);
})
.catch(()=>{
    console.log("Error");
})
}

// updatePhoto("Retrato","Está hecho con un seis y un cuatro")


//Dado un usuario y un titulo de foto eliminar su foto.

function deletePhoto(username, title){
Photo.findOneAndDelete({username: username, title: title })
.then((items)=>{
    console.log("Datos eliminados");
    console.log(items);
})
.catch(()=>{
    console.log("Error");
})
}

// deletePhoto("Manuel","Retrato del artista")


//Dado un usuario eliminar todas sus fotos.
function deleteAllPhotos (username){
Photo.deleteMany({username: username})
.then((items)=>{
    console.log("Datos eliminados");
    console.log(items);
})
.catch(()=>{
    console.log("Error");
})
}

deleteAllPhotos("Paco")