const mongoose = require("mongoose");
const teacherModel = require("./reto2_teacherSchema")

const subjectSchema = new mongoose.Schema
({
    title:String,
    teachers:[teacherModel.schema]
})

module.exports = mongoose.model("Subject", subjectSchema)