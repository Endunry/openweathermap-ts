import { Time, Main, Weather, Clouds, Wind, ForecastPrecipitation, City } from "./WeatherResponse";
export interface ThreeHourResponse {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
    city: City;
}
export interface Forecast {
    dt: Time;
    main: Main & {
        temp_kf: number;
    };
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: ForecastPrecipitation;
    snow?: ForecastPrecipitation;
    sys: ForecastSys;
    dt_txt: string;
}
export interface ForecastSys {
    pod: 'd' | 'n';
}
