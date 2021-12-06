const { addHours, addMinutes } = require('date-fns');

const Cities = require('../cities');
const Tomorrow = require('../tomorrow');

const slidingWindow = require('../../helpers/sliding-window');

const TIME_WINDOW_DURATION_HOURS = 6;
const DESIRED_WALK_DURATION_MINUTES = 30;
const MAX_ACCEPTED_TEMPERATURE_CELSIUS = 25;

async function getClosestSuitableTimeslot(cityName = '') {
  const city = Cities.findByName(cityName);
  const { lat, lng } = city;

  const startTime = new Date();
  const endTime = addHours(startTime, TIME_WINDOW_DURATION_HOURS);

  const [timeline] = await Tomorrow.Timelines.retrieve({
    latitude: lat,
    longitude: lng,
    timesteps: ['1m'],
    fields: ['temperatureApparent', 'precipitationProbability'],
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
  });

  const timeslot = slidingWindow(
    timeline.intervals,
    DESIRED_WALK_DURATION_MINUTES,
    (interval) => {
      const { temperatureApparent, precipitationProbability } = interval.values;

      return temperatureApparent <= MAX_ACCEPTED_TEMPERATURE_CELSIUS
        && precipitationProbability === 0;
    },
  );

  if (!timeslot.length) {
    return null;
  }

  const firstMinute = timeslot[0].startTime;
  const lastMinute = timeslot[timeslot.length - 1].startTime;

  const timeslotStart = new Date(firstMinute);
  const timeslotEnd = addMinutes(new Date(lastMinute), 1);

  return {
    startTime: timeslotStart,
    endTime: timeslotEnd,
  };
}

module.exports = {
  getClosestSuitableTimeslot,
};
