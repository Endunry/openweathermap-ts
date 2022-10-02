import OpenWeather from './OpenWeather';
import { CountryCode, GetByCityNameChild, CurrentResponse, ThreeHourResponse } from './types';
declare class OpenWeatherMap extends OpenWeather {
    getCurrentWeatherByCityName(location?: GetByCityNameChild): Promise<CurrentResponse>;
    getCurrentWeatherByCityId(cityId?: number): Promise<CurrentResponse>;
    getCurrentWeatherByGeoCoordinates(latitude?: number, longitude?: number): Promise<CurrentResponse>;
    getCurrentWeatherByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<CurrentResponse>;
    getThreeHourForecastByCityName(location?: GetByCityNameChild): Promise<ThreeHourResponse>;
    getThreeHourForecastByCityId(cityId?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByGeoCoordinates(latitude?: number, longitude?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByZipcode(zipcode?: string, countryCode?: CountryCode): Promise<ThreeHourResponse>;
}
export default OpenWeatherMap;
