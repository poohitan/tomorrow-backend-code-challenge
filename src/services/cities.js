const cities = require('cities.json');

const MAX_SUGGESTIONS_COUNT = 3;

function findByName(cityName) {
  const city = cities.find((item) => item.name === cityName);

  if (city) {
    return city;
  }

  const suggestions = cities
    .map((item) => item.name)
    .filter((name) => name.includes(cityName))
    .slice(0, MAX_SUGGESTIONS_COUNT);

  let errorMessage = `City "${cityName}" can't be found.`;

  if (suggestions.length) {
    errorMessage += ` Did you mean: ${suggestions.join(', ')}?`;
  }

  throw new Error(errorMessage);
}

module.exports = {
  findByName,
};
