const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  user_id: {
    type: String,
  },
  doctor_id: {
    type: String,
  },
  date: {
    type: String,
    required: true
  },
  session: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true
  }
});

const appointment = mongoose.model("appointment", appointmentSchema);
module.exports = appointment;