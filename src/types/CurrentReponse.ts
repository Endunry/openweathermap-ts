// 20200516233806
// https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

const data = {
  coord: {
    lon: -0.1257,
    lat: 51.5085
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d'
    }
  ],
  base: 'stations',
  main: {
    temp: 23.6,
    feels_like: 23.69,
    temp_min: 18.92,
    temp_max: 25.98,
    pressure: 1028,
    humidity: 64
  },
  visibility: 10000,
  wind: {
    speed: 4.12,
    deg: 100
  },
  clouds: {
    all: 0
  },
  dt: 1626552114,
  sys: {
    type: 2,
    id: 268730,
    country: 'GB',
    sunrise: 1626494599,
    sunset: 1626552575
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200
};

type Visibility = {
  visibility?: number;
};

export type CurrentResponse = typeof data & Visibility;
