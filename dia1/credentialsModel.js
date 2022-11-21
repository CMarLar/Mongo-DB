const mongoose = require ("mongoose");
let Credentials = require ("./credentialsSchema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/codenotch2", 
                {useNewUrlParser: false, useUnifiedTopology: false})

let credentialsDocument = new Credentials
({
    address: "Calle del Ángel, 15",
    phone: "910000000",
    email: "pablo@correo.net"
})

credentialsDocument.save()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})