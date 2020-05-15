import OpenWeatherMap from './OpenWeatherMap'
import { Unit, CountryCode, Language, QueryType } from './types'

const WEATHER = 'weather'
const FORECAST = 'forecast'

interface GetCurrentWeatherByCityName {
  cityName?: string
  // TODO: Update state types
  state?: string
  countryCode?: CountryCode
}

class OpenWeather extends OpenWeatherMap {
  public getCurrentWeatherByCityName(location?: GetCurrentWeatherByCityName) {
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
        const currentWeather = this.getByCityId(cityId, WEATHER)
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
        const currentWeather = await this.getByGeoCoordinates(
          latitude,
          longitude,
          WEATHER
        )

        console.log(currentWeather)
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

  public getThreeHourForecastByCityName(location: GetCurrentWeatherByCityName) {
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

  public getThreeHourForecastByCityId(cityId: number) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByCityId(cityId, FORECAST)
        resolve(currentWeather)
      } catch (error) {
        reject(error)
      }
    })
  }

  public getThreeHourForecastByGeoCoordinates(
    latitude: number,
    longitude: number
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = await this.getByGeoCoordinates(
          latitude,
          longitude,
          FORECAST
        )

        console.log(currentWeather)
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
//   // await openWeather.getCurrentWeatherByCityId(833)
//   // openWeather.setCityId(833)
//   // await openWeather.getCurrentWeatherByCityId()

//   try {
//     openWeather.setCityName({
//       cityName: 'austin',
//     })
//     await openWeather.getCurrentWeatherByCityName()
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
