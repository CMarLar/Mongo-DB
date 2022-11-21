const mongoose = require ("mongoose");
let User = require ("./userSchema");

mongoose.connect("mongodb+srv://CarlosMarina:MarinaCarlos@cluster0.gqzypms.mongodb.net/codenotch2", 
                {useNewUrlParser: false, useUnifiedTopology: false})

let userDocument = new User
({
    login: "Pepito",
    password: "A234567"
})

userDocument.save()
.then((data)=>{
    console.log(data.login);
    console.log(data.password);
})
.catch((err)=>{
    console.log(err);
})
