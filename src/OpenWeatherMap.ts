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
  zipcode: {
    zipcode?: number
    countryCode?: string
  }
}

interface SetCurrentWeatherByCityName {
  cityName: string
  // TODO: Update state types
  state?: string
  countryCode?: CountryCode
}
interface GetCurrentWeatherByCityName {
  cityName?: string
  // TODO: Update state types
  state?: string
  countryCode?: CountryCode
}

interface GetByCityName {
  location?: GetCurrentWeatherByCityName
  queryType: QueryType
}

const host = `https://api.openweathermap.org/data/`
const apiVersion = `2.5/`
const base = host + apiVersion

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
      zipcode: {},
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
  }: SetCurrentWeatherByCityName) {
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

  public setZipCode(zipcode: number, countryCode?: CountryCode) {
    this.location.zipcode = {
      ...this.location.zipcode,
      zipcode,
      countryCode,
    }
  }

  public clearSettings() {
    this.settings = {
      ...this.settings,
      units: 'imperial',
      language: 'en',
    }
  }

  public clearLocation() {
    this.location = {
      city: {},
      cityId: undefined,
      geoCoordinates: {},
      zipcode: {},
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

  public buildURL(queryType: QueryType, query: string) {
    const { baseURL, settings } = this

    return `${baseURL + queryType}?${query}&appid=${settings.apiKey}`
  }

  // ***
  // ***
  // protected
  // ***
  // ***

  protected getByCityName({ location, queryType }: GetByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        // it's possible that argument is missing and set location is missing too
        if (!location?.cityName && !this.location.city.cityName) {
          throw new Error(
            `cityName missing, please pass it via argument or set it using setCityName method`
          )
        }

        const cityName = location?.cityName || this.location.city.cityName
        const state = location?.state || this.location.city.state
        const countryCode =
          location?.countryCode || this.location.city.countryCode

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
        const { location } = this

        if (!cityId && !location.cityId) {
          throw new Error(
            `cityId missing, please pass it via argument or set it using setCityId method`
          )
        }

        cityId = cityId || this.location.cityId

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
        const { location } = this

        if (
          (!latitude || !longitude) &&
          (!location.geoCoordinates.latitude ||
            !location.geoCoordinates.longitude)
        ) {
          throw new Error(
            `latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method`
          )
        }

        latitude = latitude || location.geoCoordinates.latitude
        longitude = longitude || location.geoCoordinates.longitude

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
        const { location } = this

        if (!zipcode || !location.zipcode.zipcode) {
          throw new Error(
            `zipcode missing, please pass it via argument or set it using setZipcode method`
          )
        }

        zipcode = zipcode || location.zipcode.zipcode

        const query = `zip=${zipcode}${countryCode ? ',' + countryCode : ''}`
        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        console.log('contry code', countryCode)
        console.log('currentWeather', currentWeather)

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

// newMap.setCityName({
//   cityName: 'austin',
//   countryCode: 'us',
// })

// console.log(newMap.getAllLocations())

export default OpenWeatherMap

// object shape
// throw new error
