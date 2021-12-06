const request = require('./request');

const URL = '/timelines';
const DEFAULT_TIMESTEP = '1h';
const DEFAULT_UNITS = 'metric';

async function retrieve({
  latitude,
  longitude,
  fields,
  timesteps = [DEFAULT_TIMESTEP],
  units = DEFAULT_UNITS,
}) {
  const { data } = await request('GET', URL, {
    query: {
      location: `${latitude},${longitude}`,
      fields: fields.join(','),
      timesteps: timesteps.join(','),
      units,
    },
  });

  return data.timelines;
}

module.exports = {
  retrieve,
};
