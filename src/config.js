require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';

const shared = {
  environment,

  tomorrow: {
    baseURL: 'https://api.tomorrow.io/v4',
    apiKey: process.env.TOMORROW_API_KEY,
  },
};

const config = {
  development: {
    logs: {
      level: 'dev',
    },
    ...shared,
  },
  production: {
    logs: {
      level: 'tiny',
    },
    ...shared,
  },
};

module.exports = config[environment];
