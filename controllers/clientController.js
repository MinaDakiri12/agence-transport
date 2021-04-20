const Client = require('../models/clients')
var nodemailer = require('nodemailer');

//sendmailer
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
    subject: 'testing send mail',
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
exports.test = (req, res) => {
    res.send({message:'clients module' })
}

exports.client = (req,res) =>{

    const client = new Client(req.body);
    
    client.save((err, client) => {
        if(err) {
            return res.status(400).send(err)
        }
        res.send(client)

    })

}
exports.info = (req, res ,next)=>{
    Client.find()
    .then(response => {res.json({response})
    })
    .catch(error =>{
        res.json({message:error})
    })
}
