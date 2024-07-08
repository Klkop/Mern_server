const mongoose = require('mongoose');
const bookSchema= mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        required:true,
    },totalbooks:{
        type:String,
        required:true,
    },authorId:{
        type:String,
        required:true,
    },discreption:{
        type:String,
        required:true,

    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('Book',bookSchema)
