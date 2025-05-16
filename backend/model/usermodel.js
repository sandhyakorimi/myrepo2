const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userNumber:{
        type:Number,
        required:true
    }
});
module.exports = mongoose.model("userData",userData);
