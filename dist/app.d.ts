import OpenWeather from './OpenWeather';
import { CountryCode, GetByCityName, CurrentResponse, ThreeHourResponse } from './types';
declare class OpenWeatherMap extends OpenWeather {
    getCurrentWeatherByCityName(location?: GetByCityName): Promise<CurrentResponse>;
    getCurrentWeatherByCityId(cityId?: number): Promise<CurrentResponse>;
    getCurrentWeatherByGeoCoordinates(latitude?: number, longitude?: number): Promise<CurrentResponse>;
    getCurrentWeatherByZipcode(zipcode?: number, countryCode?: CountryCode): Promise<CurrentResponse>;
    getThreeHourForecastByCityName(location?: GetByCityName): Promise<ThreeHourResponse>;
    getThreeHourForecastByCityId(cityId?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByGeoCoordinates(latitude?: number, longitude?: number): Promise<ThreeHourResponse>;
    getThreeHourForecastByZipcode(zipcode?: number, countryCode?: CountryCode): Promise<ThreeHourResponse>;
}
export default OpenWeatherMap;
