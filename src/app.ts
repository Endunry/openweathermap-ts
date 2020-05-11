// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

// Translation is applied for the city name and description fields.
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import { unitTypes, Countries } from './types'
import { capitalize } from './helpers'

dotenv.config()

type TypeQuery = 'weather' | 'forecast'

interface ISettings {
  units?: unitTypes
  language?: string
  [key: string]: string
}

interface IinitialSettings extends ISettings {
  apiKey: string
}

const host = `https://api.openweathermap.org/data/`
const apiVersion = `2.5/`

class OpenWeatherMap {
  private settings: IinitialSettings
  private baseURL: string

  constructor({
    apiKey,
    units = 'imperial',
    language = 'en',
  }: IinitialSettings) {
    this.settings = {
      apiKey,
      units,
      language,
    }
    this.baseURL = host + apiVersion
  }

  public getSettings(key?: string) {
    if (key && this.settings[key]) {
      return this.settings[key]
    }

    if (key && !this.settings[key]) {
      return `${key} is not found!`
    }

    return this.settings
  }

  public setSettings(key: string, value: string) {
    if (key && this.settings[key]) {
      this.settings[key] = value
      return `${key} is changed to ${this.settings[key]}`
    }

    if (key && !this.settings[key]) {
      return `${key} is not found!`
    }

    return `Please pass in an option key with a value`
  }

  // Getters

  public async getCurrentWeatherByCityName(cityName: string) {
    try {
      const query = `q=${cityName}`
      const request = this.buildURL('weather', query)

      const response = await fetch(request)
      const currentWeather = await response.json()

      console.log(currentWeather)
      return currentWeather
    } catch (error) {
      return error
    }
  }

  public async getCurrentWeatherByCityId(cityId: number) {
    try {
      const query = `id=${cityId}`
      const request = this.buildURL('weather', query)

      const response = await fetch(request)
      const currentWeather = await response.json()

      console.log(currentWeather)
      return currentWeather
    } catch (error) {
      return error
    }
  }

  public async getCurrentWeatherByGeoCoordinates(
    latitude: number,
    longitude: number
  ) {
    try {
      const query = `lat=${latitude}&lon=${longitude}`
      const request = this.buildURL('weather', query)

      const response = await fetch(request)
      const currentWeather = await response.json()

      console.log(currentWeather)
      return currentWeather
    } catch (error) {
      return error
    }
  }

  public async getCurrentWeatherByZipcode(zipcode: number, country?: string) {
    try {
      // better handling
      const countryCode = (
        Countries[capitalize(country)] || country
      ).toLowerCase()
      const query = `zip=${zipcode}${countryCode ? ',' + countryCode : ''}`
      const request = this.buildURL('weather', query)

      const response = await fetch(request)
      const currentWeather = await response.json()

      console.log('contry code', countryCode)
      console.log(currentWeather)

      return currentWeather
    } catch (error) {
      return error
    }
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
console.log(newMap.setSettings('language', 'kr'))
// newMap.getCurrentWeatherByCityName('austin')
// newMap.getCurrentWeatherByCityId(300)
// newMap.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
// newMap.getCurrentWeatherByZipcode(78754, 'UnitedStates')
// console.log(newMap.setApiKey('qwpeorqjwe'))

export default OpenWeatherMap
