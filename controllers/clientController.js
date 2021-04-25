const Client = require('../models/Clients');
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');



exports.addClient = (req,res) =>{

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
    .then(response => {res.json(response)
    })
    .catch(error =>{
        res.json({message:error})
    })
}
exports.findClient = async (req, res) => {
    const { date } = req.body;
    const { email } = req.body;
    try {
      if (date && email) {
        const result = await Client.find({ email, date });
        if (result) return res.status(200).json(result);
      } else if (date && !email) {
        const result = await Client.find({ date });
        if (result) return res.status(200).json(result);
      } else if (!date && email) {
        const result = await Client.find({ email });
        if (result) return res.status(200).json(result);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
};

const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.gmail.com',
      auth: {
        type: 'custom',
        user: 'jsnode22@gmail.com',
        pass: 'Nodejs1234',
      },
    })
  );
exports.reply = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    try {
      const currentClient = await Client.findOne({ _id: id });
      if (currentClient) {
        const mailOptions = {
          from: 'jsnode22@gmail.com',
          to: currentClient.email,
          subject: 'Mail',
          text: message,
        };
        const envoiMail = await transporter.sendMail(mailOptions);
        if (envoiMail) res.status(200).json('Mail sent');
      }
    } catch (error) {
      throw Error(error) 
    }
};

exports.single = async (req, res) => {
    const { id } = req.params;
    try {
      const currentClient = await Client.findOne({ _id: id });
      if (currentClient) return res.status(200).json(currentClient);
    } catch (error) {
      return res.status(500).json(error);
    }
};
  
  


