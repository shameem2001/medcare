const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
    user_id: {
        type: String,
      },
    doctor_id: {
        type: String,
      },
    title: {
        type: String,
        required: true
     },
    observation: {
        type: String,
        required: true
     },
    prescription: {
        type: String,
        required: true
    }
});

const prescription = mongoose.model("prescription",prescriptionSchema);
module.exports = prescription;