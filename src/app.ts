// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

// Translation is applied for the city name and description fields.
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Units, CountryCodes, Languages } from './types'
import { capitalize } from './helpers'

dotenv.config()

// Todo: Response JSON object types

type TypeQuery = 'weather' | 'forecast'

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

  //
  //
  // Setters
  //
  //

  public setApiKey(apiKey: string) {
    this.settings.apiKey = apiKey
  }

  public setUnits(units: Units) {
    this.settings.units = units
  }

  public setLanguage(language: Languages) {
    this.settings.language = language
  }

  //
  //
  // Getters
  //
  //

  public getSettings(key?: string) {
    if (key && this.settings[key]) {
      return this.settings[key]
    }

    if (key && !this.settings[key]) {
      return `${key} is not found!`
    }

    return this.settings
  }

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
        const query = `q=${cityName}${state ? ',' + state : ''}${
          countryCode ? ',' + countryCode : ''
        }`
        const request = this.buildURL('weather', query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByCityId(cityId: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = `id=${cityId}`
        const request = this.buildURL('weather', query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log(currentWeather)
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
        const query = `lat=${latitude}&lon=${longitude}`
        const request = this.buildURL('weather', query)

        const response = await fetch(request)
        const currentWeather = await response.json()

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
        const query = `zip=${zipcode}${countryCode ? ',' + countryCode : ''}`
        const request = this.buildURL('weather', query)

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

  private buildURL(queryType: TypeQuery, query: string) {
    const { baseURL, settings } = this

    return `${baseURL + queryType}?${query}&appid=${settings.apiKey}`
  }
}

// tests
const newMap = new OpenWeatherMap({
  apiKey: process.env.API_KEY,
})

console.log(newMap.getSettings())
// newMap.setLanguage('aa')
// newMap.getCurrentWeatherByCityName({ cityName: 'austin' })
// newMap.getCurrentWeatherByCityId(300)
// newMap.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
newMap.getCurrentWeatherByZipcode(78754, 'us')
// console.log(newMap.setApiKey('qwpeorqjwe'))

export default OpenWeatherMap

// object shape
// throw new error
