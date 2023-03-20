import { CountryCode } from "./CountryCode";
import { Coordinate } from "./Unit";
import { Base, Clouds, Main, Precipitation, Weather, Wind, Time } from "./WeatherResponse";
export interface CurrentWeatherSys {
    type?: number;
    id?: number;
    message?: number;
    country: CountryCode;
    sunrise: Time;
    sunset: Time;
}
export interface CurrentWeatherResponse {
    coord: Coordinate;
    weather: Weather[];
    base: Base;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    rain?: Precipitation;
    snow?: Precipitation;
    dt: number;
    sys: CurrentWeatherSys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
