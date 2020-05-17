# openweathermap-ts

An abstract layer over openWeatherMap APIs to simplify making calls built with TypeScript and Promises. It's a tiny bundle at 1.2K (gzipped: 580). **Note:** `openweathermap-ts` currently supports the free tier APIs. Future updates will include paid version of APIs.

* Current Weather
* 3-hour Forecast.

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
// import the library
const OpenWeatherMap = require('openweathermap-ts')

// Make an instance with the API key
const weather = new OpenWeatherMap({
  apiKey: 'Your API Key',
})

// additional options to pass in. You can change these later
// defaults: units: 'imperial' and language: 'en'
const weather = new OpenWeatherMap({
  apiKey: 'Your API Key',
  units: 'metric',
  language: 'kr',
})
```

## Usage

There are 2 ways of using public getter methods. You can pass in argument/s or use the defined location object to setup your configuration and don't use any arguments. When both are used, the argument precedes over defined locatino object.

### getCurrentWeatherByCityId

> We recommend to call API by city ID to get unambiguous result for your city.

[List of city ID city.list.json.gz](http://bulk.openweathermap.org/sample/)

[List of CityIds in JSON](https://raw.githubusercontent.com/bulentv/open-weather-map-city-list/master/index.js)

```js
weather.getCurrentWeatherByCityId(1835848)
```

// Todo: Response JSON object types
// Todo: CityID validations
// Todo: geoCoordinate types
// should countryCodes be uppercase? how about states?
