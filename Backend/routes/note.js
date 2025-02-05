import express from 'express';
import Note from '../models/Note.js';
import middleware from '../middleware/middleware.js';

const router = express.Router()

router.post('/add' , middleware , async (req , res) => {

    try{
        const { title , description } = req.body;
        const newNote = new Note ({
            title,
            description,
            userID: req.user.id,
        })

        await newNote.save();

        return res(200).json({success: true , message: "account created successfully"});

    }catch(error){
        console.log("not success Account")
        return res(500).json({success: false , message: "account created Not successfully"});
    }

})

export default router