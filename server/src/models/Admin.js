import express from 'express'
import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }

})

export const AdminModel = mongoose.model('admin', AdminSchema)