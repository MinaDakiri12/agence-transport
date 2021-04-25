const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;


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
       
    }, 
    date: {
        type: String,
        default: dt,
      },
    
});





module.exports = mongoose.model('client', clientSchema)