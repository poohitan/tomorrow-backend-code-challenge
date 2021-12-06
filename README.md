# Weather Insights API

This API can help you answering small everyday questions related to weather.

## 1. Flood risk evaluation

Accepts a list of cities and responds with the list of the top 3 cities with the highest chance of getting flooded in the next 4 days.

Endpoint: `/risks/flood/top`

Query params:

- `cities` (required) — comma separated list of cities to check. Supports up to 10 cities.

Sample request:
**GET** `/risks/flood/top?cities=Lviv,Kyiv,Oslo,London`

Sample response:

    {
        "data" : {
            "rating": [
                {
                    "name": "Kyiv",
                    "floodRisk": 32.309999999999995
                },
                {
                    "name": "London",
                    "floodRisk": 23.02
                },
                {
                    "name": "Lviv",
                    "floodRisk": 0
                }
            ]
        }
    }

Flood risk is the total number of accumulated rain in the city within the closest 4 days.

## 2. Find a suitable dog walking timeslot

Accepts a city name and responds with the closest timeslot over the next 6 hours, in which there would be no precipitations and the air temperature won't exceed 25 degrees Celsius, so you could comfortably walk your dog in this city.

Endpoint: `/activities/dog-walking/closest-timeslot`

Query params:

- `city` (required) — the name of a city to walk a dog in.

Sample request:
**GET** `/activities/dog-walking/closest-timeslot?city=Jerusalem`

Sample response:

    {
        "data": {
            "timeslot": {
                "startTime": "2021-12-06T12:35:00.000Z",
                "endTime": "2021-12-06T13:05:00.000Z"
            }
        }
    }

Time values in responses are always UTC.
