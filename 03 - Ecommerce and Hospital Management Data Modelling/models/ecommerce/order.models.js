import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: [
        {
            address: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            pincode: {
                type: Number,
                min: [6, "Must be 6 digits"],
                max: 6,
                required: true,
            },
            houseNo: {
                type: String,
            }
        }
    ],
    status: {
        type: String,
        enum: ["PROCESSING","CANCELLED","DELIVERED","RETURNING","RETURNED"],
        default: "PENDING"
    }
},{timestamps: true})

export const Order = mongoose.model("Order", orderSchema)