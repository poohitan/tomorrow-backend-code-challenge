const express = require('express');

const activities = require('./activities');
const risks = require('./risks');

const router = express.Router();

router.use('/activities', activities);
router.use('/risks', risks);

module.exports = router;
