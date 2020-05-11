// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

// Translation is applied for the city name and description fields.
import fetch from 'node-fetch'
import { unitTypes } from './types'
import * as dotenv from 'dotenv'

dotenv.config()

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
      const { baseURL, settings } = this

      const endPoint = `${baseURL}weather?q=${cityName}&appid=${settings.apiKey}`
      const response = await fetch(endPoint)
      const currentWeather = await response.json()

      console.log(currentWeather)
      return currentWeather
    } catch (error) {
      return error
    }
  }

  public async getCurrentWeatherByCityId(cityId: number) {
    try {
      const { baseURL, settings } = this

      const endPoint = `${baseURL}weather?id=${cityId}&appid=${settings.apiKey}`
      const response = await fetch(endPoint)
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
      const { baseURL, settings } = this

      const endPoint = `${baseURL}weather?lat=${latitude}&lon=${longitude}&appid=${settings.apiKey}`
      const response = await fetch(endPoint)
      const currentWeather = await response.json()

      console.log(currentWeather)
      return currentWeather
    } catch (error) {
      return error
    }
  }

  public async getCurrentWeatherByZipcode(
    zipcode: number,
    countryCode?: number
  ) {
    try {
      const { baseURL, settings } = this

      const endPoint = `${baseURL}weather?zip=${zipcode}${
        countryCode ? ',' + countryCode : ''
      }&appid=${settings.apiKey}`
      const response = await fetch(endPoint)
      const currentWeather = await response.json()

      console.log(currentWeather)
      return currentWeather
    } catch (error) {
      return error
    }
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
// newMap.getCurrentWeatherByZipcode(78754)
// console.log(newMap.setApiKey('qwpeorqjwe'))

export default OpenWeatherMap
