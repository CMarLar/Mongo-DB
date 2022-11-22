const mongoose = require("mongoose");
const markModel = require("./reto2_markSchema")
const studentSchema = new mongoose.Schema
({
    firstname:String,
    lastname:String,
    marks: [markModel.schema]
})

module.exports = mongoose.model("Student", studentSchema, "Students")