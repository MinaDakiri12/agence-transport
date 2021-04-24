const express = require('express');
const router = express.Router();
const {addClient, info,  reply, single, findClient} = require('../controllers/clientController');



router.get('/info', info);
router.post('/client', addClient);
router.post('/reply/:id', reply)
router.post('/search', findClient);
router.post('/single/:id', single)





module.exports = router;