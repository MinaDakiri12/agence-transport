const express = require('express');
const {test, client} = require('../controllers/clientController');

const router = express.Router();

router.get('/', test);

router.post('/client', client)
module.exports = router;