const mongoose = require("mongoose");

const dependantSchema = mongoose.Schema({
    user_id:{
        type: String,
    },
    name:{
        type: String,
        required: true,
    },
    relationship:{
        type: String,
        required: true,
    }
});

const dependant = mongoose.model("dependant", dependantSchema);
module.exports = dependant;