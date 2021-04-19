const Client = require('../models/clients')
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
