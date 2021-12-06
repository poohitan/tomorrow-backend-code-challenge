const express = require('express');
const dogWalking = require('./dog-walking');

const router = express.Router();

router.use('/dog-walking', dogWalking);

module.exports = router;
