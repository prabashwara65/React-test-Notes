import mongoose from 'mongoose'


const NoteSchema = new mongoose.Schema({
    title : {type : String},
    description : {type : String},
    userID : {type : mongoose.Schema.Types.ObjectId , ref: 'User'},
})

const Note = mongoose.model('Note' , NoteSchema);
export default Note