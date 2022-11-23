const mongoose = require ("mongoose");

const Teacher = require("./teacherSchema")

const markSchema = new mongoose.Schema
({
    date:Date,
    mark:Number,
    student_first_name:String,
    student_last_name:String,
    group_name:String,
    subject_name:String,
    teachers: [Teacher.schema]//Hay que poner .schema porque si no estás haciendo referencia al modelo
})

module.exports = mongoose.model("Mark", markSchema, "Marks");