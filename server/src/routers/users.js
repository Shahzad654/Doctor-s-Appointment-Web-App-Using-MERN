import express from 'express';
import { UserModel } from '../models/Users.js';
import bcrypt from 'bcryptjs'

const router = express.Router();

router.post('/register', async (req, res) => {
    const {firstname, lastname, email, password} = req.body
    const user = await UserModel.findOne({email})
    if(user){
        res.json("Email is already exists!")
    }

    else{
        bcrypt.hash(password, 10).then(
            (hash)=>{
                const newUser = new UserModel({firstname, lastname, email, password: hash})
                newUser.save()
                res.json("User Registered Successfully!")

            }
        )

    }
    
});


router.post('/login', async(req,res)=>{
    const {email, password} = req.body
    const user = await UserModel.findOne({email})
    if(!user){
        res.json("User is not Registered please register yourself!")
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

export { router as userRouter };
