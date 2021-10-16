const mongoose = require("mongoose");


const userShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    channel:{
        type:String,
        required:true
    }
})


const UsersSignUp = mongoose.model("usersignup",userShema);

module.exports = UsersSignUp;
