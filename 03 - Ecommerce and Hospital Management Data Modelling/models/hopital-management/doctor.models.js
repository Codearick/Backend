import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true
    },
    experiencedInYears: {
        type: Number,
        default: 0
    },
    worksIn: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema)