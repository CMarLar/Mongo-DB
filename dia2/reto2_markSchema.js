const mongoose = require("mongoose");
const subjectModel = require("./reto2_subjectSchema")

const markSchema = new mongoose.Schema
({
    date:Date,
    mark:Number,
    subject:subjectModel.schema,
})

module.exports = mongoose.model("Mark", markSchema)