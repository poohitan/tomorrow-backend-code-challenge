const axios = require('axios');
const config = require('../../config');

const { baseURL, apiKey } = config.tomorrow;

module.exports = async function request(method, url, options = {}) {
  const { query, body } = options;
  let fullURL = baseURL + url;

  if (query) {
    const params = new URLSearchParams(query);

    fullURL += `?${params.toString()}`;
  }

  const { data } = await axios.request({
    method,
    body,
    url: fullURL,
    headers: {
      apikey: apiKey,
    },
  });

  return data;
};
