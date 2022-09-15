const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
    user_id: {
        type: String
    },
    doctor_id: {
        type: String
    },
    prescription_id: {
        type: String
    },
    appointment_id: {
        type: String
    },
    patient_name: {
        type: String
    },
    Doctor_name: {
        type: String
    },
    hospital_name:{
        type: String,
    },
    prescribed_date: {
        type: String
    },
    appointed_time:{
        type: String,
    },
    prescribed_time: {
        type: String
    },
    patient_address: {
        type: String
    },
    prescription: {
        type: String
    },
    priority: {
        type: String
    },
});

const Store = mongoose.model("store", storeSchema);

module.exports = Store;