const express = require('express');
const HttpError = require('http-error');

const Flood = require('../../services/risks/flood');

const router = express.Router();

const MAX_INPUT_CITIES_NUMBER = 10;

router.get('/top', async (req, res, next) => {
  try {
    const { cities: cityNamesRaw } = req.query;

    if (!cityNamesRaw) {
      throw new HttpError.BadRequest('Missing required query param "cities".');
    }

    const cityNames = cityNamesRaw.split(',').map((cityName) => cityName.trim());

    if (cityNames.length > MAX_INPUT_CITIES_NUMBER) {
      throw new HttpError.BadRequest(`The cities number shouldn't exceed ${MAX_INPUT_CITIES_NUMBER}.`);
    }

    const rating = await Flood.getRisksRating(cityNames);

    res.json({
      data: {
        rating,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
