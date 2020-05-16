import OpenWeather from '../app'
import * as dotenv from 'dotenv'

dotenv.config()

describe(`Tests Get Methods in app.ts`, () => {
  const openWeather = new OpenWeather({
    apiKey: process.env.API_KEY,
  })

  describe(`Tests implementation of getByCityName`, () => {
    it(`should test getCurrentWeatherByCityName throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getCurrentWeatherByCityName()
      } catch (error) {
        expect(error.message).toBe(
          'cityName missing, please pass it via argument or set it using setCityName method'
        )
      }
    })

    it(`should test getThreeHourForecastByCityName throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getThreeHourForecastByCityName()
      } catch (error) {
        expect(error.message).toBe(
          'cityName missing, please pass it via argument or set it using setCityName method'
        )
      }
    })
  })

  describe(`Tests implementation of getByCityId`, () => {
    it(`should test getCurrentWeatherByCityId throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getCurrentWeatherByCityId()
      } catch (error) {
        expect(error.message).toBe(
          `cityId missing, please pass it via argument or set it using setCityId method`
        )
      }
    })

    it(`should test getThreeHourForecastByCityId throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getThreeHourForecastByCityId()
      } catch (error) {
        expect(error.message).toBe(
          `cityId missing, please pass it via argument or set it using setCityId method`
        )
      }
    })
  })

  describe(`Tests implementation of getByGeoCoordinates`, () => {
    it.skip(`should test getCurrentWeatherByCityId throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getCurrentWeatherByGeoCoordinates()
      } catch (error) {
        expect(error.message).toBe(
          `latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method`
        )
      }
    })
    it(`should test getCurrentWeatherByGeoCoordinates throws with only one latitude as argument`, async () => {
      try {
        await openWeather.getCurrentWeatherByGeoCoordinates(30.2672)
      } catch (error) {
        expect(error.message).toBe(
          `latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method`
        )
      }
    })

    it(`should test getThreeHourForecastByCityId throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getThreeHourForecastByGeoCoordinates()
      } catch (error) {
        expect(error.message).toBe(
          `latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method`
        )
      }
    })
  })
})
