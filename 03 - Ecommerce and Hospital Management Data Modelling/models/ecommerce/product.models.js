import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    ProductImage: {
        type: String,
    },
    price: {
        type: Number,
        default: null
    },
    stock: {
        default: 0,
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

export const Product = mongoose.model("Product", ProductSchema)