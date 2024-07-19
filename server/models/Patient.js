const mongoose = require("mongoose")

const PatientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
    gender: { type: String, enum: ['male', 'female', 'others'], default: 'male' },
    photo: String
})

const PatientModel= mongoose.model("patient", PatientSchema)
module.exports = PatientModel