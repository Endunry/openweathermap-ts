// Translation is applied for the city name and description fields.
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Unit, CountryCode, Language, QueryType } from './types'
import { capitalize } from './helpers'

dotenv.config()

// Todo: Response JSON object types
// Todo: CityID validations
// Todo: geoCoordinate types

interface Settings {
  units?: Unit
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
  countryCode?: CountryCode
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

  // ***
  // ***
  // Setters
  // ***
  // ***

  public setApiKey(apiKey: string) {
    this.settings.apiKey = apiKey
  }

  public setUnits(units: Unit) {
    this.settings.units = units
  }

  public setLanguage(language: Language) {
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

  // ***
  // ***
  // Private
  // ***
  // ***

  protected buildURL(queryType: QueryType, query: string) {
    const { baseURL, settings } = this

    return `${baseURL + queryType}?${query}&appid=${settings.apiKey}`
  }

  protected getByCityName(
    { cityName, state, countryCode }: GetCurrentWeatherByCityName,
    queryType: QueryType
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

  protected getByCityId(cityId: number, queryType: QueryType) {
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

  protected getByGeoCoordinates(
    latitude: number,
    longitude: number,
    queryType: QueryType
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

  protected getByZipcode(
    zipcode: number,
    queryType: QueryType,
    countryCode?: CountryCode
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

export default OpenWeatherMap

// object shape
// throw new error
