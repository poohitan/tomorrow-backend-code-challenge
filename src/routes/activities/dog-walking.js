const express = require('express');
const HttpError = require('http-error');

const DogWalking = require('../../services/activities/dog-walking');

const router = express.Router();

router.get('/closest-timeslot', async (req, res, next) => {
  try {
    const { city } = req.query;

    if (!city) {
      throw new HttpError.BadRequest('Missing required query param "city".');
    }

    const timeslot = await DogWalking.getClosestSuitableTimeslot(city);

    if (!timeslot) {
      throw new HttpError.NotFound(`There is no suitable timeslot in ${city}.`);
    }

    res.json({
      data: {
        timeslot,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
