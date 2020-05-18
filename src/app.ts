import OpenWeather from './OpenWeather'
import {
  CountryCode,
  GetByCityNameChild,
  CurrentResponse,
  ThreeHourResponse,
} from './types'
import { WEATHER, FORECAST } from './helpers'

class OpenWeatherMap extends OpenWeather {
  public getCurrentWeatherByCityName(
    location?: GetByCityNameChild
  ): Promise<CurrentResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityName({
          location,
          queryType: WEATHER,
        })) as CurrentResponse
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByCityId(
    cityId?: number
  ): Promise<CurrentResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityId({
          cityId,
          queryType: WEATHER,
        })) as CurrentResponse
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByGeoCoordinates(
    latitude?: number,
    longitude?: number
  ): Promise<CurrentResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByGeoCoordinates({
          latitude,
          longitude,
          queryType: FORECAST,
        })) as CurrentResponse

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByZipcode(
    zipcode?: number,
    countryCode?: CountryCode
  ): Promise<CurrentResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByZipcode(
          zipcode,
          WEATHER,
          countryCode
        )) as CurrentResponse

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByCityName(
    location?: GetByCityNameChild
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityName({
          location,
          queryType: FORECAST,
        })) as ThreeHourResponse

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByCityId(
    cityId?: number
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityId({
          cityId,
          queryType: FORECAST,
        })) as ThreeHourResponse
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByGeoCoordinates(
    latitude?: number,
    longitude?: number
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByGeoCoordinates({
          latitude,
          longitude,
          queryType: FORECAST,
        })) as ThreeHourResponse

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getThreeHourForecastByZipcode(
    zipcode?: number,
    countryCode?: CountryCode
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByZipcode(
          zipcode,
          FORECAST,
          countryCode
        )) as ThreeHourResponse

        return resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default OpenWeatherMap
