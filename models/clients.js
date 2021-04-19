const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
       
    },
    phone: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
       
    },
    message: {
        type: String,
        trim: true,
        required: true,
       
    }
   
    
      

},{timestamps: true})




module.exports = mongoose.model('client', clientSchema)