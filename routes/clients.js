const express = require('express');
const router = express.Router();
const {addClient, info,  replyClient, singleClient, findClient} = require('../controllers/clientController');



router.get('/info', info);
router.post('/client', addClient);
router.post('/reply/:id', replyClient);
router.post('/search', findClient);
//router.post('/singleclient/:id', singleClient)





module.exports = router;