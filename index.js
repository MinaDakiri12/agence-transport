
const express = require('express');
const moongoose = require('mongoose');





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