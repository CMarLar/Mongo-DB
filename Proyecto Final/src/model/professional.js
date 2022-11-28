const {Schema, model} = require("mongoose");
const proSchema = new Schema
({

    name: String,
    nationality: String,
    profession: String,

})
//actores, directores y writers son STRINGS, no schemas.
module.exports = model("Professional", proSchema, "Professionals");

