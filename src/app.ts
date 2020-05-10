// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

// Translation is applied for the city name and description fields.

import { unitTypes } from './types'

interface IConfig {
  apiKey: string
  units?: unitTypes
  langauge?: string
}

class OpenWeatherMap {
  private apiKey: string
  private units: string
  private langauge: string

  constructor({ apiKey, units = 'imperial', langauge = 'en' }: IConfig) {
    this.apiKey = apiKey
    this.units = units
    this.langauge = langauge
  }

  public getApiKey() {
    return this.apiKey
  }

  public getUnits() {
    return this.units
  }

  public getLanguage() {
    return this.langauge
  }

  public setApiKey(apiKey: string) {
    this.apiKey = apiKey
    return this.apiKey
  }

  public setUnits(units: string) {
    this.units = units
    return this.units
  }

  public setLanguage(language: string) {
    this.langauge = language
    return this.langauge
  }
}

const newMap = new OpenWeatherMap({
  apiKey: 'asdfasdfasdf',
})

console.log(newMap.getApiKey())
console.log(newMap.setApiKey('qwpeorqjwe'))
