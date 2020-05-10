console.log('hi')

// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

interface IConfig {
  apiKey: string
  units?: string
  langauge?: string
}

class OpenWeatherMap {
  public apiKey: string
  public units: string
  public langauge: string

  constructor({ apiKey, units = 'imperial', langauge = 'en' }: IConfig) {
    this.apiKey = apiKey
    this.units = units
    this.langauge = langauge
  }

  public getApiKey() {
    return this.apiKey
  }

  public getUnits() {
    return this.units
  }

  public getLanguage() {
    return this.langauge
  }
}

const newMap = new OpenWeatherMap({
  apiKey: 'asdfasdfasdf',
})
