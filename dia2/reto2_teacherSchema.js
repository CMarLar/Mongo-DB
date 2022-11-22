const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema
({
    firstname:String,
    lastname:String,
    groups:[String],
})

module.exports = mongoose.model("Teacher", teacherSchema, "Teachers")