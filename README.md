# openweathermap-ts

An abstract layer over openWeatherMap APIs to simplify making calls built with TypeScript and Promises. It's a tiny bundle at 1.2K (gzipped: 580). **Note:** `openweathermap-ts` currently supports the free tier APIs. Future updates will include paid version of APIs.

- Current Weather
- 3-hour Forecast.

## Installation

```js
// install using npm
npm install openweathermap-ts

// or install using  yarn
yarn add openweathermap-ts
```

You will also need to register for an API key at the [official site](https://openweathermap.org/appid). There are free and paid plans.

## Basic Setup

```js
// require the module (commonJS)
const OpenWeatherMap = require('openweathermap-ts')

// or import the module (ESM)
import OpenWeatherMap from 'openweathermap-ts'

// Make an instance with your API key
const openWeather = new OpenWeatherMap({
  apiKey: 'Your API Key',
})

// additional options to pass in. You can change these later
// defaults: units: 'imperial' and language: 'en'
const openWeather = new OpenWeatherMap({
  apiKey: 'Your API Key',
  units: 'metric',
  language: 'kr',
})
```

## Usage

There are 2 ways of using public getter methods. You can pass in argument/s or configure a location object and let the methods automatically reuse defined location. When both are used, the argument/s precede over defined location object.

Notice that methods are grouped together by &. That means the grouped methods work exactly the same and can be interchanged with each other.

---

### getCurrentWeatherByCityId & getThreeHourForecastByCityId

> We recommend to call API by city ID to get unambiguous result for your city.

You can download a List of CityIds in JSON in the [project Repo](https://raw.githubusercontent.com/bulentv/open-weather-map-city-list/master/index.js)

Alternatively, you can also download them at [http://bulk.openweathermap.org/sample/](http://bulk.openweathermap.org/sample/)

You can pass in a cityId

```js
openWeather
  .getCurrentWeatherByCityId(1835848)
  .then((weather) => {
    console.log('Current Weather Object is', weather)
  })
  .catch((error) => console.error('Error is ', error))
```

You can also setup a cityId and use it

```js
openWeather.setCityId(1835848)

openWeather
  .getCurrentWeatherByCityId()
  .then((weather) => {
    console.log('Current Weather Object is', weather)
  })
  .catch((error) => console.error('Error is ', error))
```

Because the method returns a promise, async & await is allowed

```js
try {
  const weather = await openWeather.getCurrentWeatherByCityId(1835848)
  console.log('Current Weather Object is', weather)
} catch (error) {
  console.error('Error is ', error)
}
```

### getCurrentWeatherByCityName & getThreeHourForecastByCityName

Pass in an object. `cityName` is required. You can also pass in state and countryCode as options. Make sure state is spelled out.

```js
openWeather
  .getCurrentWeatherByCityName({
    cityName: 'Cedar Park',
    state: 'Texas',
    countryCode: 'us',
  })
  .then((weather) => console.log('Current Weather Object is', weather))
```

### getCurrentWeatherByGeoCoordinates & getThreeHourForecastByGeoCoordinates

```js
openWeather
  .getCurrentWeatherByGeoCoordinates(33.426971, -117.611992)
  .then((weather) => console.log('Current Weather Object is', weather))
```

### getCurrentWeatherByZipcode & getThreeHourForecastByZipcode

```js
openWeather
  .getCurrentWeatherByZipcode(84604)
  .then((data) => console.log('Current Weather Object is', data))
```

## Future Works

- CityID validations
- Handle coordinate types
- Enforce strict rules on countryCodes and states
