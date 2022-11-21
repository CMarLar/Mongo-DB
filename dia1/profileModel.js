const mongoose = require ("mongoose");
let Profile = require ("./profileSchema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/codenotch2", 
                {useNewUrlParser: false, useUnifiedTopology: false})

let profileDocument = new Profile
({
    name: "Manuel",
    surname: "Del Río",
    dateOfBirth: 1980-10-01,
    comments: "Soy Manuel y soy pequeño",
    role: "Estudiante"
})

profileDocument.save()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
