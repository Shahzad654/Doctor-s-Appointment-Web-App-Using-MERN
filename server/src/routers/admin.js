import express from 'express';
import { AdminModel } from '../models/Admin.js';
import bcrypt from 'bcryptjs'
const router = express.Router()

router.post('/adminregister', async (req, res) => {
    const {firstname, lastname, email, password} = req.body
    const user = await AdminModel.findOne({email})
    if(user){
        res.json("Email is already exists!")
    }

    else{
        bcrypt.hash(password, 10).then(
            (hash)=>{
                const newUser = new AdminModel({firstname, lastname, email, password: hash})
                newUser.save()
                res.json("Admin Registered Successfully!")

            }
        )

    }
    
});

router.post('/adminlogin', async(req,res)=>{
    const {email, password} = req.body
    const user = await AdminModel.findOne({email})
    if(!user){
        res.json("Admin is not Registered please register yourself!")
    }
    if(user){
        bcrypt.compare(password, user.password, (err, response)=>{
            if(err){
                res.json("Incorrect email or password")
            }
            if(response){
                res.json("Success")
            }
        })
    }
})

export { router as adminRouter };