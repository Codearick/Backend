import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
},{timestamps: true});

export const categories = mongoose.model("categories",CategorySchema);