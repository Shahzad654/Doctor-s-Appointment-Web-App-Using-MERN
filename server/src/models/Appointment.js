import express from 'express'
import mongoose from 'mongoose'

const AppoinmentSchema = new mongoose.Schema({
    doctor:{
        type: String,
        required: true
    },
    patientname:{
        type: String,
        
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    }

})

export const AppoinmentModel = mongoose.model('Appointments', AppoinmentSchema)