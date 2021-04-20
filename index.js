
const express = require('express');
const moongoose = require('mongoose');

//sendmailer
var nodemailer = require('nodemailer');
const { info } = require('./controllers/clientController');

var transport = nodemailer.createTransport({
    
        service:'gmail',
        auth:{
            user: 'jsnode22@gmail.com',
            pass:'Nodejs1234'
        }
    

})

//send out email

var mailOptions = {
    from: 'jsnode22@gmail.com',
    to: 'minadakiri7@gmail.com',
    subject: 'testing mail',
    text:'This is the body of the mail'
}
transport.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log("Email send" + info.response) 
    }
})

// Imports Routes
const clientRoutes = require ('./routes/clients');

//Config app
const app = express();
require('dotenv').config();

//database
moongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

})
.then(() => console.log('db connected'))
.catch(() => console.log('not connected to the database!') )

//Middleware
app.use(express.json())

//Routes Middleware
app.use('/api/clients', clientRoutes);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running  on port ${port}`));