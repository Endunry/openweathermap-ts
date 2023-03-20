import OpenWeather from './OpenWeather';
import {
  CountryCode,
  GetByCityNameChild,
  CurrentWeatherResponse,
  ThreeHourResponse
} from './types';
import { WEATHER, FORECAST } from './helpers';

class OpenWeatherMap extends OpenWeather {

  /**
   * 
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
   */
  public getCurrentWeatherByCityName(
    location?: GetByCityNameChild
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityName({
          location,
          queryType: WEATHER
        })) as CurrentWeatherResponse;
        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
  * 
  * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
  */
  public async getCurrentWeatherByCityId(
    cityId?: number
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityId({
          cityId,
          queryType: WEATHER
        })) as CurrentWeatherResponse;
        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async getCurrentWeatherByGeoCoordinates(
    latitude?: number,
    longitude?: number
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByGeoCoordinates({
          latitude,
          longitude,
          queryType: WEATHER
        })) as CurrentWeatherResponse;

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
* 
* @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
*/
  public async getCurrentWeatherByZipcode(
    zipcode?: string,
    countryCode?: CountryCode
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByZipcode(
          zipcode,
          WEATHER,
          countryCode
        )) as CurrentWeatherResponse;

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
 * 
 * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
 */
  public getThreeHourForecastByCityName(
    location?: GetByCityNameChild
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityName({
          location,
          queryType: FORECAST
        })) as ThreeHourResponse;

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
 * 
 * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
 */
  public getThreeHourForecastByCityId(
    cityId?: number
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityId({
          cityId,
          queryType: FORECAST
        })) as ThreeHourResponse;
        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
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
          queryType: FORECAST
        })) as ThreeHourResponse;

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
 * 
 * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
 */
  public async getThreeHourForecastByZipcode(
    zipcode?: string,
    countryCode?: CountryCode
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByZipcode(
          zipcode,
          FORECAST,
          countryCode
        )) as ThreeHourResponse;

        return resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default OpenWeatherMap;
