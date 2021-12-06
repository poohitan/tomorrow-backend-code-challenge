const express = require('express');
const flood = require('./flood');

const router = express.Router();

router.use('/flood', flood);

module.exports = router;
