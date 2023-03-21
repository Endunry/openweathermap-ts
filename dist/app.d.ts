import OpenWeather from './OpenWeather';
import { CountryCode, GetByCityNameChild, CurrentWeatherResponse, ThreeHourResponse, InitialSettings } from './types';
declare class OpenWeatherMap extends OpenWeather {
    constructor({ apiKey, units, language }: InitialSettings);
    /**
     * @summary openweathermap.org isnt maintainging the built in Geocoding API anymore, its still usable but not maintained anymore. Better use getCurrentWeatherByCityName instead (uses the seperate Geocoding API)
     * @deprecated Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin).
     */
    builtInGetCurrentWeatherByCityName(location?: GetByCityNameChild): Promise<CurrentWeatherResponse>;
    /**
     * @summary uses the geolocation-API to get the current weather by city name
     * @param location
     * @returns
     */
    getCurrentWeatherByCityName(location?: GetByCityNameChild): Promise<CurrentWeatherResponse>;
    /**
    * @summary openweathermap.org isnt maintainging the built in Geocoding API anymore, its still usable but not maintained anymore.
    * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
    */
    getCurrentWeatherByCityId(cityId?: number): Promise<CurrentWeatherResponse>;
    getCurrentWeatherByGeoCoordinates(latitude?: number, longitude?: number): Promise<CurrentWeatherResponse>;
    /**
  *
  * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
  */
    builtInGetCurrentWeatherByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<CurrentWeatherResponse>;
    /**
     * @summary uses the geolocation-API to get the current weather by zipcode and then uses the geolocation to get the current weather
     * @param zipcode
     * @param countryCode
     * @returns
     */
    getCurrentWeatherByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<CurrentWeatherResponse>;
    /**
   *
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
    builtInGetThreeHourForecastByCityName(location?: GetByCityNameChild): Promise<ThreeHourResponse>;
    getThreeHourForecastByCityName(location?: GetByCityNameChild): Promise<ThreeHourResponse>;
    /**
   *
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
    getThreeHourForecastByCityId(cityId?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByGeoCoordinates(latitude?: number, longitude?: number): Promise<ThreeHourResponse>;
    /**
   *
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
    getThreeHourForecastByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<ThreeHourResponse>;
}
export default OpenWeatherMap;
