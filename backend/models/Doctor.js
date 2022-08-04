const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  img:{
    type:String,
  },
  experience:{
    type:Number
  }
});

const doctor = mongoose.model("doctor", doctorSchema);
module.exports = doctor;
