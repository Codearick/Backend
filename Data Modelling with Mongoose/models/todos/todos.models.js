import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Field cannot be empty!"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    color: {
        type: String
    },
    complete: {
        type: Boolean,
        default: false
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ], // Array of Sub-Todos

}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema);