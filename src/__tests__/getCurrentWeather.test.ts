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

    //   test creating an instance without api key
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
    it(`should test getCurrentWeatherByCityName throws without an argument or setLocation`, async () => {
      try {
        await openWeather.getCurrentWeatherByCityName()
      } catch (error) {
        expect(error.message).toBe(
          'cityName missing, please pass it via argument or set it using setCityName method'
        )
      }
    })

    //   test creating an instance without api key
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
})
