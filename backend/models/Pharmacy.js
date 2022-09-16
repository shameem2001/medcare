const mongoose = require("mongoose");

const pharmacySchema = mongoose.Schema({
  hospital_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  password: {
    type: String,
  },
});

const pharmacy = mongoose.model("pharmacy", pharmacySchema);

module.exports = pharmacy;