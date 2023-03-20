import OpenWeather from './OpenWeather';
import { CountryCode, GetByCityNameChild, CurrentWeatherResponse, ThreeHourResponse } from './types';
declare class OpenWeatherMap extends OpenWeather {
    getCurrentWeatherByCityName(location?: GetByCityNameChild): Promise<CurrentWeatherResponse>;
    getCurrentWeatherByCityId(cityId?: number): Promise<CurrentWeatherResponse>;
    getCurrentWeatherByGeoCoordinates(latitude?: number, longitude?: number): Promise<CurrentWeatherResponse>;
    getCurrentWeatherByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<CurrentWeatherResponse>;
    getThreeHourForecastByCityName(location?: GetByCityNameChild): Promise<ThreeHourResponse>;
    getThreeHourForecastByCityId(cityId?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByGeoCoordinates(latitude?: number, longitude?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<ThreeHourResponse>;
}
export default OpenWeatherMap;
