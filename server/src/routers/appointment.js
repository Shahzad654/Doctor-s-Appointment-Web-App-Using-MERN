import express from 'express'
import { AppoinmentModel } from '../models/Appointment.js'
const router = express.Router()

router.post('/booking', async(req,res)=>{

    try{

    const {doctor, patientname, date, time} = req.body
    const Appointment = new AppoinmentModel({doctor, patientname, date, time})
    await Appointment.save()
    res.json(Appointment)

    }
    catch(err){
        console.log(err)
        res.status(500).json({ error: "An error occurred while saving the appointment." })
    }
    
})

router.get('/getBooking', async(req,res)=>{
    const response = await AppoinmentModel.find({})
    res.json(response)
    
})


export {router as appointRouter}