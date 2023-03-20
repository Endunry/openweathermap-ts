import { CountryCode } from "./CountryCode";
import { Coordinate } from "./Unit";
import { WeatherCondition } from "./WeatherConditions";
export interface Weather {
    id: WeatherCondition;
    main: string;
    description: string;
    icon: string;
}
export declare type Base = 'stations' | 'cities' | string;
export interface Main {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
}
export declare type Visibility = number;
export interface Wind {
    speed: number;
    deg: number;
    gust?: number;
}
export interface Clouds {
    all: number;
}
export interface ForecastPrecipitation {
    '3h': number;
}
export interface Precipitation extends ForecastPrecipitation {
    '1h'?: number;
}
export declare type Time = number;
export declare type CityId = number;
export interface City {
    id: CityId;
    name: string;
    coord: Coordinate;
    country: CountryCode;
    population: number;
    timezone: number;
    sunrise: Time;
    sunset: Time;
}
