import mongoose from 'mongoose'

const medicalRecordSchema = mongoose.Schema({
    diagnosedWith: [
        {
            type: String,
            required: true
        }
    ],
    pastDiseases: [
        { 
            type: String,
            default: "None"
        }
    ],
    
},{timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema);
