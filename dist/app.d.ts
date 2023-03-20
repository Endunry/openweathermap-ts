import OpenWeather from './OpenWeather';
import { CountryCode, GetByCityNameChild, CurrentWeatherResponse, ThreeHourResponse } from './types';
declare class OpenWeatherMap extends OpenWeather {
    /**
     *
     * @deprecated Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin).
     */
    getCurrentWeatherByCityName(location?: GetByCityNameChild): Promise<CurrentWeatherResponse>;
    /**
    *
    * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
    */
    getCurrentWeatherByCityId(cityId?: number): Promise<CurrentWeatherResponse>;
    getCurrentWeatherByGeoCoordinates(latitude?: number, longitude?: number): Promise<CurrentWeatherResponse>;
    /**
  *
  * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/weather#builtin)
  */
    getCurrentWeatherByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<CurrentWeatherResponse>;
    /**
   *
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
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
