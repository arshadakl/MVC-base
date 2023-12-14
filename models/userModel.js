const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    mobile:{
        type:Number,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Number,
        required: true
    },
    accountOpenAt:{
        type:String,
        require:true
    },
    block:{
      type:Number
    },
    image: {
        type: String 
    }
});


const User = mongoose.model('User', userSchema);

module.exports = {
    User
};