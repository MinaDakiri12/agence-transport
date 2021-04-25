const express = require('express');
const router = express.Router();
const {client, info,  reply, single, findClient} = require('../controllers/clientController');



router.get('/info', info);
router.post('/client', client);
router.post('/reply/:id', reply);
router.post('/search', findClient);
router.post('/single/:id', single)





module.exports = router;