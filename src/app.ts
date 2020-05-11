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

class OpenWeatherMap {
  private settings: IinitialSettings

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
}

// tests
const newMap = new OpenWeatherMap({
  apiKey: process.env.API_KEY,
})

console.log(newMap.getSettings())
console.log(newMap.setSettings('language', 'kr'))
// console.log(newMap.setApiKey('qwpeorqjwe'))

export default OpenWeatherMap
