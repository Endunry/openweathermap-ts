// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

// Translation is applied for the city name and description fields.
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Units, CountryCodes, Languages, QueryTypes } from './types'
import { capitalize } from './helpers'

dotenv.config()

// Todo: Response JSON object types
// Todo: CityID validations
// Todo: geoCoordinate types

interface Settings {
  units?: Units
  language?: string
  [key: string]: string
}

interface InitialSettings extends Settings {
  apiKey: string
}

interface GetCurrentWeatherByCityName {
  cityName: string
  // TODO: Update state types
  state?: string
  countryCode?: CountryCodes
}

const host = `https://api.openweathermap.org/data/`
const apiVersion = `2.5/`
const WEATHER = 'weather'
const FORECAST = 'forecast'

class OpenWeatherMap {
  private settings: InitialSettings
  private baseURL: string

  constructor({
    apiKey,
    units = 'imperial',
    language = 'en',
  }: InitialSettings) {
    this.settings = {
      apiKey,
      units,
      language,
    }
    this.baseURL = host + apiVersion
  }

  // ***
  // ***
  // Setters
  // ***
  // ***

  public setApiKey(apiKey: string) {
    this.settings.apiKey = apiKey
  }

  public setUnits(units: Units) {
    this.settings.units = units
  }

  public setLanguage(language: Languages) {
    this.settings.language = language
  }

  // ***
  // ***
  // Getters
  // ***
  // ***

  public getAllSettings() {
    return this.settings
  }

  public getCurrentWeatherByCityName({
    cityName,
    state,
    countryCode,
  }: GetCurrentWeatherByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByCityName(
          {
            cityName,
            state,
            countryCode,
          },
          WEATHER
        )
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByCityId(cityId: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByCityId(cityId, WEATHER)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByGeoCoordinates(
    latitude: number,
    longitude: number
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByGeoCoordinates(
          latitude,
          longitude,
          WEATHER
        )

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByZipcode(
    zipcode: number,
    countryCode?: CountryCodes
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByZipcode(zipcode, WEATHER, countryCode)

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByCityName({
    cityName,
    state,
    countryCode,
  }: GetCurrentWeatherByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByCityName(
          {
            cityName,
            state,
            countryCode,
          },
          FORECAST
        )
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByCityId(cityId: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByCityId(cityId, FORECAST)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByGeoCoordinates(
    latitude: number,
    longitude: number
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByGeoCoordinates(
          latitude,
          longitude,
          FORECAST
        )

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getThreeHourForecastByZipcode(
    zipcode: number,
    countryCode?: CountryCodes
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByZipcode(zipcode, FORECAST, countryCode)

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  // ***
  // ***
  // Private
  // ***
  // ***

  private buildURL(queryType: QueryTypes, query: string) {
    const { baseURL, settings } = this

    return `${baseURL + queryType}?${query}&appid=${settings.apiKey}`
  }

  private getByCityName(
    { cityName, state, countryCode }: GetCurrentWeatherByCityName,
    queryType: QueryTypes
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `q=${cityName}${state ? ',' + state : ''}${
          countryCode ? ',' + countryCode : ''
        }`

        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getByCityId(cityId: number, queryType: QueryTypes) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `id=${cityId}`
        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getByGeoCoordinates(
    latitude: number,
    longitude: number,
    queryType: QueryTypes
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `lat=${latitude}&lon=${longitude}`
        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  private getByZipcode(
    zipcode: number,
    queryType: QueryTypes,
    countryCode?: CountryCodes
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `zip=${zipcode}${countryCode ? ',' + countryCode : ''}`
        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log('contry code', countryCode)
        console.log(currentWeather)

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }
}

// tests
const newMap = new OpenWeatherMap({
  apiKey: process.env.API_KEY,
})

// newMap.setLanguage('aa')
// newMap.getCurrentWeatherByCityName({ cityName: 'austin' })
// newMap.getCurrentWeatherByCityId(833)
// newMap.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
// newMap.getCurrentWeatherByZipcode(78754, 'us')
// console.log(newMap.setApiKey('qwpeorqjwe'))

newMap.getThreeHourForecastByCityName({ cityName: 'austin' })
// newMap.getCurrentWeatherByCityId(833)
// newMap.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
// newMap.getCurrentWeatherByZipcode(78754, 'us')
// console.log(newMap.setApiKey('qwpeorqjwe'))

export default OpenWeatherMap

// object shape
// throw new error
