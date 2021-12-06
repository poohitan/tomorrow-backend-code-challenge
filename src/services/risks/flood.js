const { addDays } = require('date-fns');

const Tomorrow = require('../tomorrow');
const Cities = require('../cities');
const round = require('../../helpers/round');

const FORECAST_RANGE_DAYS = 4;
const RATING_LENGTH = 3;

async function evaluateRisk(cityName) {
  const city = Cities.findByName(cityName);
  const { lat, lng } = city;

  const startTime = new Date();
  const endTime = addDays(startTime, FORECAST_RANGE_DAYS);

  const [timeline] = await Tomorrow.Timelines.retrieve({
    latitude: lat,
    longitude: lng,
    timesteps: ['1h'],
    fields: ['rainAccumulation'],
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
  });

  const { intervals } = timeline;

  const totalRainAccumulation = intervals
    .reduce((sum, interval) => sum + interval.values.rainAccumulation, 0);

  return round(totalRainAccumulation, 2);
}

async function getRisksRating(cityNames = []) {
  const cityFloodRisks = await Promise.all(
    cityNames.map(async (cityName) => ({
      name: cityName,
      floodRisk: await evaluateRisk(cityName),
    })),
  );

  const rating = cityFloodRisks.sort((left, right) => right.floodRisk - left.floodRisk);

  return rating.slice(0, RATING_LENGTH);
}

module.exports = {
  evaluateRisk,
  getRisksRating,
};
