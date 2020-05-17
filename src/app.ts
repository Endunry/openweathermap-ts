import OpenWeatherMap from './OpenWeatherMap'
import { CountryCode, GetByCityName } from './types'
import { WEATHER, FORECAST } from './helpers'
import * as dotenv from 'dotenv'

dotenv.config()

class OpenWeather extends OpenWeatherMap {
  public getCurrentWeatherByCityName(location?: GetByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByCityName({
          location,
          queryType: WEATHER,
        })
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByCityId(cityId?: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByCityId({ cityId, queryType: WEATHER })
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByGeoCoordinates(
    latitude?: number,
    longitude?: number
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByGeoCoordinates({
          latitude,
          longitude,
          queryType: FORECAST,
        })

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getCurrentWeatherByZipcode(
    zipcode: number,
    countryCode?: CountryCode
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByZipcode(zipcode, WEATHER, countryCode)

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByCityName(location?: GetByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByCityName({
          location,
          queryType: FORECAST,
        })

        console.log(currentWeather)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByCityId(cityId?: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByCityId({ cityId, queryType: FORECAST })
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByGeoCoordinates(
    latitude?: number,
    longitude?: number
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByGeoCoordinates({
          latitude,
          longitude,
          queryType: FORECAST,
        })

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public async getThreeHourForecastByZipcode(
    zipcode: number,
    countryCode?: CountryCode
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByZipcode(zipcode, FORECAST, countryCode)

        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }
}

const openWeather = new OpenWeather({ apiKey: process.env.API_KEY })

// const execute = async () => {
//   // try {
//   //   openWeather.setCityName({
//   //     cityName: 'austin',
//   //   })
//   //   await openWeather.getCurrentWeatherByCityName()
//   // } catch (error) {
//   //   console.log('catch error', error)
//   // }
//   // try {
//   //   openWeather.setCityId(833)
//   //   await openWeather.getCurrentWeatherByCityId()
//   // } catch (error) {
//   //   console.log('catch error', error)
//   // }
//   try {
//     await openWeather.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
//   } catch (error) {
//     console.log('catch error', error)
//   }
// }

// execute()

// openWeather.setLanguage('aa')
// openWeather
//   .getCurrentWeatherByCityName({ cityName: 'austin' })
//   .then((data) => console.log('data', data))
// openWeather.getCurrentWeatherByCityId(833)
// openWeather.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
// openWeather.getCurrentWeatherByZipcode(78754, 'us')
// console.log(openWeather.setApiKey('qwpeorqjwe'))

// openWeather.getThreeHourForecastByCityName({ cityName: 'austin' })
// openWeather.getCurrentWeatherByCityId(833)
// openWeather.getCurrentWeatherByGeoCoordinates(30.2672, 97.7431)
// openWeather.getCurrentWeatherByZipcode(78754, 'us')
// console.log(openWeather.setApiKey('qwpeorqjwe'))

export default OpenWeather
