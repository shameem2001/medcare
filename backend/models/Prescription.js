const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  doctor_id: {
    type: String,
    required: true,
  },
  date:{
    type: String
  },
  blood_pressure: {
    type: String,
  },
  body_temperature: {
    type: String,
  },
  blood_oxygen: {
    type: String,
  },
  blood_sugar: {
    type: String,
  },
  observation: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
    required: true,
  },
  priority:{
    type: String
  }
});

const prescription = mongoose.model("prescription", prescriptionSchema);
module.exports = prescription;
