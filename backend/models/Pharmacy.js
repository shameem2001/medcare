const mongoose = require("mongoose");

const pharmacySchema = mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    hospital_name:{
        type: String,
    },
    email:{
        type:String
    },
    password:{
        type: String
    },
    district:{
        type : String
    },
    phoneNumber:{
        type : String
    }
});

const pharmacy = mongoose.model("pharmacy", pharmacySchema);

module.exports = pharmacy;