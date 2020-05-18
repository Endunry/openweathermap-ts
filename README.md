# openweathermap-ts

An abstract layer over openWeatherMap APIs to simplify making calls built with TypeScript and Promises 🎉. It's a tiny bundle at 1.2K (gzipped: 580). **Note:** `openweathermap-ts` currently supports free tier API services:

- Weather
- 3-hour Forecast.

## Installation

```js
// install using npm
npm install openweathermap-ts

// or install using  yarn
yarn add openweathermap-ts
```

**You will also need to register for an API key at the [official site](https://openweathermap.org/appid). There are free and paid plans.**

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

// or pass additional options in. You can change these later
// defaults: units: 'imperial' and language: 'en'
const openWeather = new OpenWeatherMap({
  apiKey: 'Your API Key',
  units: 'metric',
  language: 'kr',
})
```

## Usage

There are 2 ways of using public getter methods. You can pass in argument/s or configure a location object and let the methods automatically reuse defined location. When both are used, the argument/s precede over defined location object.

Notice that methods are grouped together by &. That means the grouped methods work exactly the same and can be interchanged with each other to produce different results.

---

### getCurrentWeatherByCityId & getThreeHourForecastByCityId

> We recommend to call API by city ID to get unambiguous result for your city.

You can download a List of CityIds in JSON in the [project Repo](https://github.com/shimphillip/open-weather-map/blob/master/city.list.json)

Alternatively, you can also download them at [http://bulk.openweathermap.org/sample/](http://bulk.openweathermap.org/sample/)

The methods expect a cityId

```js
openWeather
  .getCurrentWeatherByCityId(1835848)
  .then((weather) => {
    console.log('Weather object is', weather)
  })
  .catch((error) => console.error('Error is ', error))
```

You can also setup a cityId and use it

```js
openWeather.setCityId(1835848)

openWeather
  .getThreeHourForecastByCityId()
  .then((weather) => {
    console.log('Weather object is', weather)
  })
  .catch((error) => console.error('Error is ', error))
```

Because the method returns a promise, async & await is allowed

```js
try {
  const weather = await openWeather.getCurrentWeatherByCityId(1835848)
  console.log('Weather object is', weather)
} catch (error) {
  console.error('Error is ', error)
}
```

### getCurrentWeatherByCityName & getThreeHourForecastByCityName

Pass in an object. `cityName` is required. You can also pass in state and countryCode as options. Make sure state is spelled out.

```js
openWeather
  .getThreeHourForecastByCityName({
    cityName: 'Cedar Park',
    state: 'Texas',
    countryCode: 'us',
  })
  .then((weather) => console.log('Weather object is', weather))
```

### getCurrentWeatherByGeoCoordinates & getThreeHourForecastByGeoCoordinates

```js
openWeather
  .getCurrentWeatherByGeoCoordinates(33.426971, -117.611992)
  .then((weather) => console.log('Weather object is', weather))
```

### getCurrentWeatherByZipcode & getThreeHourForecastByZipcode

```js
openWeather
  .getCurrentWeatherByZipcode(84604)
  .then((data) => console.log('Weather object is', data))
```

you can also optionally pass in a countryCode to get more accurate location

```js
openWeather
  .getCurrentWeatherByZipcode(84604, 'us')
  .then((data) => console.log('Weather object is', data))
```

---

### _Helper Methods_

### setApiKey

```js
openWeather.setApiKey('Your changed API key')
```

### setUnits

Takes 1 of 3 types.

```js
// 'imperial' (Fahrenheit) | 'metric' (Celsius) | 'standard' (Kelvin)
openWeather.setUnits('metric')
```

### setLanguage

Translation is applied for the city name and description fields.

```js
openWeather.setUnits('kr')
```

### clearSettings

The above three properties are stored in `settings` object. You can clean out all the properties

_Note: this also wipes out your API Key_

```js
openWeather.clearSettings()
```

### setCityId

```js
openWeather.setCityId(1835848)
```

### setCityName

state and countryCode are optional

```js
openWeather.setCityName({
  cityName: 'Austin',
})
```

```js
openWeather.setCityName({
  cityName: 'Austin',
  state: 'Texas',
})
```

### setGeoCoordinates

```js
openWeather.setGeoCoordinates(33.426971, -117.611992)
```

### setZipCode

2nd argument Country Code is optional

```js
openWeather.setZipCode(84604)
```

```js
openWeather.setZipCode(84604, 'us')
```

### clearLocation

The above location setter methods belong to the `location` object. Invoking clearLocation sets the object back to default.

```js
openWeather.clearLocation()
```

### getAllSettings

You can view what you stored inside your `settings` object

```js
openWeather.getAllSettings()
```

### getAllLocations

You can view what you stored inside your `location` object

```js
openWeather.getAllLocations()
```

## Bug Reports

Please create issues or pull requests at https://github.com/shimphillip/open-weather-map

## Future Works 🚀

- CityID validations
- Filter out unsolicited information options
- Handle coordinate types
- Enforce strict rules on countryCodes and states
- support for paid services like Daily Forecast and Hourly Forecast
