import mongoose from 'mongoose'

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        enums: ["O-","O+","A-","A+","B-","B+","AB-","AB+"],
        required: true
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHERS"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
},{timestamps: true})

export const Patient = mongoose.model("Patient",patientSchema);