const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // PUT YOUR CODE HERE
    res.json('ok');

    next();
});

module.exports = {
    router
};
