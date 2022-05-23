const mongoose =require("mongoose")

const userSchemas = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
        
    },
    password:{
        type:String,
        required:true,
    },
})

const RegisterUser = new mongoose.model("RegisterUser",userSchemas);
module.exports = RegisterUser;