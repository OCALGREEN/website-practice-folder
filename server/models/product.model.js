const mongoose = require("mongoose") 

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Title is required"], 
        minlenght: [3, "Title must be greater then 3 characters"]
    }, 
    price: {
        type: Number, 
        required: [true, "Price is required"], 
        min: [0.1] 
    }, 
    description: {
        type: String, 
        required: [true, "Description is required"], 
        minlenght: [3, "Description must be greater then 3 characters"]
    }
}, {timestamps: true})

module.exports.Product = mongoose.model("Product", ProductSchema) 