const express = require('express');

const activities = require('./activities');
const risks = require('./risks');

const router = express.Router();

router.use('/activities', activities);
router.use('/risks', risks);

router.get('/', (req, res) => {
  res.send('Check out the API documentation for the list of routes at https://github.com/poohitan/tomorrow-backend-code-challenge');
});

module.exports = router;
