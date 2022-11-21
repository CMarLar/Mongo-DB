//IMPORTAS MONGOOSE DESPUÉS DE INSTALARLO (npm i mongoose):
const mongoose = require("mongoose");

//CONSTRUYES LOS DISTINTOS SCHEMAS
const userSchema = new mongoose.Schema
({
login: {
    type: String,
    required: true,
    enum: ["Pepe", "Pepa", "Pepito"]
},
password: {
    type: String,
    required: true,
    validate: [
        //comprueba si password tiene mayúsculas (con regex) y es mayor que 6
        function (password){return /[A-Z]/.test(password) && password.length >= 6;},
        "El password debe tener al menos una letra mayúscula y al menos seis caracteres"],
        select: false
},//fin validación de password
})


//MIDDLEWARE
userSchema.pre("save", function(next){
    console.log("Middleware");
    if(this.password.length > 12){
        console.log("Tu password muy seguro!");
        next()
    }else{
        console.log("Tu password es aceptable, pero podría ser más seguro");
        next()
    }
})

//EXPORTAS los MODELOS
module.exports = mongoose.model("Users", userSchema, "Users")