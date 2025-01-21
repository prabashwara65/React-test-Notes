import express from 'express'
import Note from '../models/Note'
import middleware from '../middleware/middleware';

const router = express.Router()

router.post('/add' , middleware , async (req , res) => {

    try{

        const { title , description } = req.body;

        const newNote = new Note ({
            title,
            description,
        })


    }catch(error){

    }

})

export default router