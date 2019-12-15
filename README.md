![ClimaCell](https://climacell.ussl.co/wp-content/uploads/2019/03/CC-logo-base-black-w_blue-icon-300.png "ClimaCell")

# Take Control over The Weather

## The Weather Insights Service

In thie exercise, you will create a weather insights service. This service's API will allow understading the great impact weather has on us, by appliying business logic over ClimaCell's Weather API.

#### Required solution:

* Create a basic service. We recommend using [express-generator](https://github.com/expressjs/generator) for bootstrapping.
* The service should have the following functionality:
  * Given a list of cities, return the 3 top cities with the highest chance of getting flooded in the next 4 days. (Hint: the chance of flooding is as high as the amount of accumulated precipitation at the city. The larger it is, the higher the chance of flooding).
  * Get the next timeslot over the next 6 hours, in which I can walk my dog in my _city_ (where _city_ is a parameter). (Hint: I love walking my dog for 30 minutes, when there is no precipitation, and the temperature is not over 25 degress celcius).
* You should support the 50 most populated cities in the world. For cities data you can use [this repository](https://github.com/lutangar/cities.json).
* Our user experience is important, so make effort to have minimum response time of the service. You can, for example, for any given question, save the asnwer for 10 minutes, so you can return it instantly.

#### After you finish:

* Upload your code to `Github`, and share it with us. Notice: make it *__private__*, not public.
* Make sure the app is ready to run by running `npm i` and `npm start`.
* Make sure the service API is well documented with `README` file, so we can try it and understand it.
* *__Bonus:__* Deploy your solution to a static web hosting service of your choice (such as: `Heroku`, `Github`, `AWS S3`, `Netlify` etc..) so it is publicly available.

#### Guidelines:

* Pay attention to software design and clean code (We are believers of the [SOLID](https://en.wikipedia.org/wiki/SOLID) design principals). 
* The service's interface should be [RESTful](https://restfulapi.net/). A great example for a RESTful API is [JSON Placeholder](https://jsonplaceholder.typicode.com/guide.html).
* We also care about things like readability, maintainability, naming, and in general everything that makes the code easy to understand and extend. **Think about the app as it should be ready to be shipped to production.**
* You are free to add any libraries of your desire.
* You will have to use ClimaCell's weather API. Explore the API to understand which service suits you best. We will provide you with an API Key.

Don't hesitate to contact us with any question.

**Good Luck!**

**The ClimaCell Team**
