import OpenWeatherMap from '../app'

describe(`testing`, () => {
  const randomDate = Date.now().toString()
  const openWeather = new OpenWeatherMap({
    apiKey: randomDate,
  })

  // test creating an instance without api key

  it(`getSettings with no arguments should return default settings`, () => {
    expect(openWeather.getSettings()).toEqual({
      apiKey: randomDate,
      units: 'imperial',
      language: 'en',
    })
  })

  it(`getSettings with arguments should return corresponding value`, () => {
    expect(openWeather.getSettings('units')).toBe('imperial')
    expect(openWeather.getSettings('language')).toBe('en')
  })

  it(`getSettings with arguments return the settings object if the key is not found`, () => {
    expect(openWeather.getSettings('random')).toBe('random is not found!')
  })
})
