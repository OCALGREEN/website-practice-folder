const mongoose = require("mongoose") 

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "First name is required"], 
        minlength: [3, "First name must be greater than 3 characters"]
    }, 
    lastName: {
        type: String, 
        required: [true, "Last name is required"], 
        minlength: [3, "Last name must be greater than 3 characters"]
    }, 
    email: {
        type: String, 
        required: [true, "Email is required"], 
        minlength: [3, "Email must be greater than 3 characters"]
    }, 
    password: {
        type: String, 
        required: [true, "Passwordis required"], 
        minlength: [8, "Password must be greater than 8 characters"]
    }, 
}, {timestamp: true}) 

module.exports.User = mongoose.model("User", UserSchema) 