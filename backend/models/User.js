const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
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
  password: {
    type: String,
    required: true,
  },
  prev_docs: {
    type: String,
    required: true,
  },
  prev_cond: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  overview: [String],
  history: [
    {
      doctor_name: {
        type: String,
      },
      hospital_name: {
        type: String,
      },
      condition: {
        type: String,
      },
      consultation_date: {
        type: String,
      },
      consultation_day: {
        type: String,
      },
      doctors_notes: {
        type: Array,
      },
      body_condition: {
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
      },
    },
  ],
  appointments: [String]
});

const user = mongoose.model("user", userSchema);
module.exports = user;