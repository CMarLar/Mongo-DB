const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema
({
    username:String,
    url:String,
    title:String,
    description:String
})

module.exports = mongoose.model("Photos", photoSchema, "Photos")