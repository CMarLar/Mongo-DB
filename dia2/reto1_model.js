const mongoose = require ("mongoose");
let Photo = require ("./reto1_schema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/Dia2Reto1", 
                {useNewUrlParser: false, useUnifiedTopology: false})

/*
    username:String,
    url:String,
    title:String,
    description:String
*/


let photo1 = {username: "Carlos", 
            url: "http://www.suturart.com/wp-content/uploads/2018/12/carlos-marina_9131-bw.jpg", 
            title: "Foto1", 
            description: "Una foto mía en blanco y negro"}

let photo2 = {username: "Pedro",
            url: "https://pbs.twimg.com/profile_images/1546025607863181315/O5o2j-80_400x400.jpg",
            title: "Perfil de Twitter de Pedro",
            description: "Foto de un presidente sobre fondo blanco"}


//
Photo.insertMany([photo1,photo2])
.then (()=>{
    console.log("Documento guardado");
})
.catch(()=>{
    console.log("Error al escribir el documento");
})
