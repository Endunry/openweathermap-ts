import OpenWeather from './OpenWeather';
import {
  CountryCode,
  GetByCityNameChild,
  CurrentWeatherResponse,
  ThreeHourResponse,
  InitialSettings
} from './types';
import { CURRENT_WEATHER_ENDPOINT, FORECAST } from './helpers';
import Geocoding from './geocoding/Geocoding';

class OpenWeatherMap extends OpenWeather {



  constructor({
    apiKey,
    units,
    language
  }: InitialSettings) {
    super({ apiKey, units, language });
  }

  /**
   * @summary openweathermap.org isnt maintainging the built in Geocoding API anymore, its still usable but not maintained anymore. Better use getCurrentWeatherByCityName instead (uses the seperate Geocoding API)
   * @deprecated Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin).
   */
  public builtInGetCurrentWeatherByCityName(
    location?: GetByCityNameChild
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.builtInGetByCityName({
          location,
          queryType: CURRENT_WEATHER_ENDPOINT
        })) as CurrentWeatherResponse;
        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * @summary uses the geolocation-API to get the current weather by city name
   * @param location
   * @returns 
   */
  public getCurrentWeatherByCityName(
    location?: GetByCityNameChild
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = this.getByCityName({location, queryType: CURRENT_WEATHER_ENDPOINT}) as Promise<CurrentWeatherResponse>;

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
  * @summary openweathermap.org isnt maintainging the built in Geocoding API anymore, its still usable but not maintained anymore.
  * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
  */
  public async getCurrentWeatherByCityId(
    cityId?: number
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.getByCityId({
          cityId,
          queryType: CURRENT_WEATHER_ENDPOINT
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
          queryType: CURRENT_WEATHER_ENDPOINT
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
  public async builtInGetCurrentWeatherByZipcode(
    zipcode?: string,
    countryCode?: CountryCode
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const currentWeather = (await this.builtInGetByZipcode(
          zipcode,
          CURRENT_WEATHER_ENDPOINT,
          countryCode
        )) as CurrentWeatherResponse;

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }


  /**
   * @summary uses the geolocation-API to get the current weather by zipcode and then uses the geolocation to get the current weather
   * @param zipcode 
   * @param countryCode 
   * @returns 
   */
  public async getCurrentWeatherByZipcode(
    zipcode?: string,
    countryCode?: CountryCode
  ): Promise<CurrentWeatherResponse> {
    return new Promise(async (resolve, reject) => {
      try {

        const currentWeather = this.getByZipcode(zipcode, CURRENT_WEATHER_ENDPOINT, countryCode) as Promise<CurrentWeatherResponse>;

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
  public builtInGetThreeHourForecastByCityName(
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

  public getThreeHourForecastByCityName(
    location?: GetByCityNameChild
  ): Promise<ThreeHourResponse> {
    return new Promise(async (resolve, reject) => {
      try {

        const currentWeather = this.getByCityName({location, queryType: FORECAST}) as Promise<ThreeHourResponse>;
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
        const currentWeather = (await this.builtInGetByZipcode(
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
