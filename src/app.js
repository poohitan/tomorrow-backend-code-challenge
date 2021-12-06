require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const config = require('./config');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

const app = express();

app.use(logger(config.logs.level));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

app.use(errorHandler);

module.exports = app;
