# openweathermap-ts

[![Build Status](https://travis-ci.org/shimphillip/openweathermap-ts.svg?branch=master)](https://travis-ci.org/shimphillip/openweathermap-ts)
[![npm version](https://badge.fury.io/js/openweathermap-ts.svg)](https://badge.fury.io/js/openweathermap-ts)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/shimphillip)

An abstract layer over openWeatherMap APIs to simplify making calls. Built with TypeScript and Promises.
Even the returned JSON responses are typed for your benefits!

**Note:** The library currently only supports free tier API services:

- Current Weather
- 3-hour Forecast. (5 day / 3 hour)

## Installation

```js
// install using npm
npm install openweathermap-ts
```

**You will also need to register for an API key at the [official site](https://openweathermap.org/appid).**

## Basic Setup

```js
const OpenWeatherMap = require('openweathermap-ts');
// or
import OpenWeatherMap from 'openweathermap-ts';

const openWeather = new OpenWeatherMap({
  apiKey: 'Your API Key'
});
```

## Usage

There are 2 ways of using public getter methods.

1. Pass in argument/s
2. Store preferences in the [location object](#Helpers-for-location-object)

When both are used, the argument/s precede over the defined location object.

Notice some methods are grouped together with & because their arguments are the same. But they produce different results.

---

## getCurrentWeatherByCityName & getThreeHourForecastByCityName

```js
/**
 * @param {
 *  cityName: string,
 *  state?: string, // Spell it out. E.g, Texas
 *  countryCode?: CountryCodeType
 * }
 */
openWeather
  .getCurrentWeatherByCityName({
    cityName: 'Cedar Park'
  })
  .then((weather) => console.log('Weather object is', weather));

// or async await example
try {
  const weather = await openWeather.getThreeHourForecastByCityName({
    cityName: 'Cedar Park',
    state: 'Texas',
    countryCode: 'US'
  });
  console.log('Weather object is', weather);
} catch (error) {
  console.error('Error is ', error);
}
```

List of [CountryCodeType](https://github.com/shimphillip/openweathermap-ts/blob/master/src/helpers/country-codes.ts)

## getCurrentWeatherByCityId & getThreeHourForecastByCityId

```js
/**
 * @param cityId: number
 */
openWeather
  .getCurrentWeatherByCityId(1835848)
  .then((weather) => {
    console.log('Weather object is', weather);
  })
  .catch((error) => console.error('Error is ', error));
```

Or

```js
// set the cityId in location object
openWeather.setCityId(1835848);

// invoke the method without an argument
openWeather
  .getThreeHourForecastByCityId()
  .then((weather) => {
    console.log('Weather object is', weather);
  })
  .catch((error) => console.error('Error is ', error));
```

List of [CityIds](http://bulk.openweathermap.org/sample/)

## getCurrentWeatherByGeoCoordinates & getThreeHourForecastByGeoCoordinates

```js
/**
 * @params latitude: number, longitude: number
 */
openWeather
  .getCurrentWeatherByGeoCoordinates(33.426971, -117.611992)
  .then((weather) => console.log('Weather object is', weather));
```

## getCurrentWeatherByZipcode & getThreeHourForecastByZipcode

```js
/**
 * @params zipcode: number, countryCode?: CountryCodeType
 */
openWeather
  .getCurrentWeatherByZipcode(84604)
  .then((data) => console.log('Weather object is', data));
```

Or

```js
openWeather
  .getCurrentWeatherByZipcode(84604, 'US')
  .then((data) => console.log('Weather object is', data));
```

List of [CountryCodeType](https://github.com/shimphillip/openweathermap-ts/blob/master/src/helpers/country-codes.ts)

---

&nbsp;

## Config Methods

### Helpers for settings object

```js
/**
 * @param apiKey: string
 */
openWeather.setApiKey('yourApiKey');

/**
 * @param units: 'imperial'| 'metric' | 'standard' (Kelvin)
 */
openWeather.setUnits('metric');

/**
 * @param language: LanguageTypes
 */
openWeather.setLanguage('kr');
// LanguageTypes List -> https://github.com/shimphillip/openweathermap-ts/blob/master/languages.md

/**
 * @param none
 */
openWeather.getAllSettings();

/**
 * @param none
 */
openWeather.clearSettings(); // Remember to reset your API Key
```

&nbsp;

### Helpers for location object

```js
/**
 * @param cityId: number
 */
openWeather.setCityId(1835848);

/**
 * @param {
 *  cityName: string,
 *  state?: string, // (optional) Spell it out. E.g, Texas
 *  countryCode?: CountryCodeTypes // (optional) 
 * }
 */
openWeather.setCityName({
  cityName: 'Austin'
});
// List of CountryCodeTypes https://github.com/shimphillip/openweathermap-ts/blob/master/src/helpers/country-codes.ts

/**
 * @params latitude: number, longitude: number
 */
openWeather.setGeoCoordinates(33.426971, -117.611992);

/**
 * @params zipcode: number, countryCodeTypes?: string (optional)
 */
openWeather.setZipCode(84604, 'US');
// List of CountryCodeType https://github.com/shimphillip/openweathermap-ts/blob/master/src/helpers/country-codes.ts

/**
 * @param none
 */
openWeather.getAllLocations();

/**
 * @param none
 */
openWeather.clearLocation();
```

&nbsp;

## Bug Reports

Please create issues or pull requests at [https://github.com/shimphillip/openweathermap-ts](https://github.com/shimphillip/openweathermap-ts)

## Future Works 🚀

- CityID validations
- Filter out unsolicited information options
- Handle coordinate types
- Supports other formats like XML
- Enforce strict rules on countryCodes and states
- support for paid services like Daily Forecast and Hourly Forecast

---

Love what you use? Buy me a ~~coffee~~ boba!🍹

<a href="https://www.buymeacoffee.com/shimphillip" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
