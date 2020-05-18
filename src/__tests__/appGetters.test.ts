import OpenWeather from '../app';

// Tests all the negatives
describe('Tests Get Methods in app.ts', () => {
  const openWeather = new OpenWeather({
    apiKey: Date.now().toString()
  });

  describe('getByCityName children methods throw errors without an argument or location object', () => {
    test('getCurrentWeatherByCityName', () => {
      openWeather.getCurrentWeatherByCityName().catch(({ message }) => {
        expect(message).toBe(
          'cityName missing, please pass it via argument or set it using setCityName method'
        );
      });
    });

    test('getCurrentWeatherByCityName with others than required argument', () => {
      openWeather
        .getCurrentWeatherByCityName({
          state: 'Texas',
          countryCode: 'us'
        })
        .catch(({ message }) => {
          expect(message).toBe(
            'cityName missing, please pass it via argument or set it using setCityName method'
          );
        });
    });

    test('getThreeHourForecastByCityName', () => {
      openWeather.getThreeHourForecastByCityName().catch(({ message }) => {
        expect(message).toBe(
          'cityName missing, please pass it via argument or set it using setCityName method'
        );
      });
    });
  });

  describe('getByCityId children methods throw errors without an argument or location object', () => {
    test('getCurrentWeatherByCityId', () => {
      openWeather.getCurrentWeatherByCityId().catch(({ message }) => {
        expect(message).toBe(
          'cityId missing, please pass it via argument or set it using setCityId method'
        );
      });
    });

    test('getCurrentWeatherByCityId', () => {
      openWeather.getThreeHourForecastByCityId().catch(({ message }) => {
        expect(message).toBe(
          'cityId missing, please pass it via argument or set it using setCityId method'
        );
      });
    });
  });

  describe('getByGeoCoordinates children methods throw errors without an argument or location object', () => {
    test('getCurrentWeatherByGeoCoordinates with only one argument', () => {
      openWeather.getCurrentWeatherByGeoCoordinates().catch(({ message }) => {
        expect(message).toBe(
          'latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method'
        );
      });
    });

    test('getCurrentWeatherByGeoCoordinates with only one argument', () => {
      openWeather
        .getCurrentWeatherByGeoCoordinates(35.2786)
        .catch(({ message }) => {
          expect(message).toBe(
            'latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method'
          );
        });
    });

    test('getThreeHourForecastByGeoCoordinates', () => {
      openWeather
        .getThreeHourForecastByGeoCoordinates()
        .catch(({ message }) => {
          expect(message).toBe(
            'latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method'
          );
        });
    });
  });

  describe('getByZipcode children methods throw errors without an argument or location object', () => {
    test('getCurrentWeatherByZipcode', () => {
      openWeather.getCurrentWeatherByZipcode().catch(({ message }) => {
        expect(message).toBe(
          'zipcode missing, please pass it via argument or set it using setZipcode method'
        );
      });
    });

    test('getThreeHourForecastByZipcode', () => {
      openWeather.getThreeHourForecastByZipcode().catch(({ message }) => {
        expect(message).toBe(
          'zipcode missing, please pass it via argument or set it using setZipcode method'
        );
      });
    });
  });
});
