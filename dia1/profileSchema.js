const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type:Date,
        max:2004-21-11
    },
    comments: String,
    role: String
})


module.exports = mongoose.model("Profiles", profileSchema, "Profiles")