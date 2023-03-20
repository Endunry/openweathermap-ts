// 20200512123825
// https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=439d4b804bc8187953eb36d2a8c26a02

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
  main: Main & {temp_kf: number};
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: ForecastPrecipitation; // Only in the first Element when received in a Forecast list
  snow?: ForecastPrecipitation; // Only in the first Element when received in a Forecast list
  sys: ForecastSys;
  dt_txt: string; // Time of data forecasted, ISO, UTC
}

export interface ForecastSys {
  pod: 'd' | 'n'; // Part of the day (d = day, n = night)
}