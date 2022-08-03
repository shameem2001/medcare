const mongoose=require("mongoose");

const Schema =mongoose.Schema

const details = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    prev_docs:{
        type:String,
        required:true
    },
    prev_cond:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },


})

const subject = mongoose.model("User",details);
module.exports = subject;