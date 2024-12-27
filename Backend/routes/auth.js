import express, { Router } from 'express'
import userRegistrationMode from '../models/UserRegistration'

const route = express();

route.post('/register' , async (req , res ) => {
    try{
        const  User = {name , email , password } = req.body ;
        const userRegistrationMode = await User.findOne({email})
        
        if(userRegistrationMode){
            return res.status(401).json({success : false , message : "User is already exits "})

        }

        const hashPassword = await bcrypt.hash(password , 10)

        const newuser  = new userRegistrationMode ({ name , email , password : hashPassword})

        await newuser.save()

        return res.status(200).json({success : true , message : " User added successfully"})
        
    } catch (error){
        console.log(error)
        return res.status(500).json({success : false , message : 'error adding user ' + error})
       
    }
}) 

export default Router;