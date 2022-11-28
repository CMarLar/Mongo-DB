const {Schema, model} = require("mongoose");
const movieSchema = new Schema
({
    title: String,
    releaseYear: Number,
    nationality: String,
    actors: [String],
    directors: [String],
    writers: [String],
    producer:String,
    genre: String,
})
//actores, directores y writers son STRINGS, no schemas.
module.exports = model("Movie", movieSchema, "Movies");

