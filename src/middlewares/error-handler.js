const { StatusCodes, ReasonPhrases } = require('http-status-codes');

module.exports = (error, req, res, next) => { // eslint-disable-line
  const status = error.code || StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(status).json({
    error: {
      status,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    },
  });
};
