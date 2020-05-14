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

interface Location {
  city: {
    cityName?: string
    state?: string
    countryCode?: CountryCode
  }
  cityId?: number
  geoCoordinates: {
    latitude?: number
    longitude?: number
  }
  zipCode: {
    zipCode?: number
    countryCode?: string
  }
}

interface GetCurrentWeatherByCityName {
  cityName?: string
  // TODO: Update state types
  state?: string
  countryCode?: CountryCode
}

const host = `https://api.openweathermap.org/data/`
const apiVersion = `2.5/`

class OpenWeatherMap {
  private settings: InitialSettings
  private baseURL: string
  private location: Location

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
    this.location = {
      city: {},
      cityId: undefined,
      geoCoordinates: {},
      zipCode: {},
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

  public setCityName({
    cityName,
    state,
    countryCode,
  }: GetCurrentWeatherByCityName) {
    this.location.city = {
      ...this.location.city,
      cityName,
      state,
      countryCode,
    }
  }

  public setCityId(cityId: number) {
    this.location.cityId = cityId
  }

  public setGeoCoordinates(latitude: number, longitude: number) {
    this.location.geoCoordinates = {
      ...this.location.geoCoordinates,
      latitude,
      longitude,
    }
  }

  public setZipCode(zipCode: number, countryCode?: CountryCode) {
    this.location.zipCode = {
      ...this.location.zipCode,
      zipCode,
      countryCode,
    }
  }

  // ***
  // ***
  // Getters
  // ***
  // ***

  public getAllSettings() {
    return this.settings
  }

  public getAllLocations() {
    return this.location
  }

  // ***
  // ***
  // Private
  // ***
  // ***

  private buildURL(queryType: QueryType, query: string) {
    const { baseURL, settings } = this

    return `${baseURL + queryType}?${query}&appid=${settings.apiKey}`
  }

  // ***
  // ***
  // protected
  // ***
  // ***

  protected getByCityName(
    { cityName, state, countryCode }: GetCurrentWeatherByCityName,
    queryType: QueryType
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const { location, buildURL } = this

        if (!cityName || !location.city.cityName) {
          throw new Error(
            `cityName missing, please pass it via argument or set it using setCityName method`
          )
        }

        cityName = cityName || location.city.cityName
        state = state || location.city.state
        countryCode = countryCode || location.city.countryCode

        const query = `q=${cityName}${state ? ',' + state : ''}${
          countryCode ? ',' + countryCode : ''
        }`
        const request = buildURL(queryType, query)

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
        const { location, buildURL } = this

        if (!cityId || !location.cityId) {
          throw new Error(
            `cityId missing, please pass it via argument or set it using setCityId method`
          )
        }

        cityId = cityId || this.location.cityId

        const query = `id=${cityId}`
        const request = buildURL(queryType, query)

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
        const { location, buildURL } = this

        if (!la || !location.cityId) {
          throw new Error(
            `cityId missing, please pass it via argument or set it using setCityId method`
          )
        }

        cityId = cityId || this.location.cityId

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

newMap.setCityName({
  cityName: 'austin',
  countryCode: 'us',
})

console.log(newMap.getAllLocations())

export default OpenWeatherMap

// object shape
// throw new error
