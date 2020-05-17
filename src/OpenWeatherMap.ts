// Translation is applied for the city name and description fields.
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
import {
  Unit,
  CountryCode,
  Language,
  QueryType,
  InitialSettings,
  Location,
  SetCurrentWeatherByCityName,
  GetByCityName,
  GetByCityId,
  GetByGeoCoordinates,
} from './types'
import { capitalize } from './helpers'
dotenv.config()

const HOST = `https://api.openweathermap.org/data/`
const API_VERSION = `2.5/`

class OpenWeatherMap {
  private settings: InitialSettings
  private BASE_URL: string
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
    this.BASE_URL = HOST + API_VERSION
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
      apiKey: 'youNeedValidApiKey',
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
    const { BASE_URL, settings } = this

    return `${BASE_URL + queryType}?${query}&appid=${settings.apiKey}`
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

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  protected getByCityId({ cityId, queryType }: GetByCityId) {
    return new Promise(async (resolve, reject) => {
      try {
        const { location } = this

        if (!cityId && !location.cityId) {
          throw new Error(
            `cityId missing, please pass it via argument or set it using setCityId method`
          )
        }

        cityId = cityId || location.cityId

        const query = `id=${cityId}`
        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  protected getByGeoCoordinates({
    latitude,
    longitude,
    queryType,
  }: GetByGeoCoordinates) {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          (!latitude || !longitude) &&
          (!this.location.geoCoordinates.latitude ||
            !this.location.geoCoordinates.longitude)
        ) {
          throw new Error(
            `latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method`
          )
        }

        latitude = latitude || this.location.geoCoordinates.latitude
        longitude = longitude || this.location.geoCoordinates.longitude

        const query = `lat=${latitude}&lon=${longitude}`
        const request = this.buildURL(queryType, query)

        const response = await fetch(request)
        const currentWeather = await response.json()

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

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default OpenWeatherMap
