import OpenWeather from '../app';

describe(`testing initial state and state getters and setters`, () => {
  const randomDate = Date.now().toString();
  const openWeather = new OpenWeather({
    apiKey: randomDate
  });

  it(`getSettings with no arguments should return default settings`, () => {
    expect(openWeather.getAllSettings()).toEqual({
      apiKey: randomDate,
      units: 'imperial',
      language: 'en'
    });
  });

  it(`setUnits should correctly update the settings value`, () => {
    openWeather.setUnits('metric');

    const units = openWeather.getAllSettings().units;
    expect(units).toBe('metric');
  });

  it(`clearSettings should reset settings to defaults with the existing API key`, () => {
    openWeather.setApiKey('heyThere123');
    openWeather.clearSettings();

    const apiKey = openWeather.getAllSettings().apiKey;
    expect(apiKey).toBe('youNeedValidApiKey');
  });

  it(`should test getAllLocations function to get location object with initial values`, () => {
    const location = openWeather.getAllLocations();
    expect(location).toStrictEqual({
      city: {},
      cityId: undefined,
      geoCoordinates: {},
      zipcode: {}
    });
  });

  it(`should use setLanguage correctly`, () => {
    openWeather.setLanguage('es');

    const language = openWeather.getAllSettings().language;
    expect(language).toBe('es');
  });

  it(`should use setCityName correctly`, () => {
    openWeather.setCityName({
      cityName: 'Austin',
      state: 'Tx'
    });

    const city = openWeather.getAllLocations().city;
    expect(city).toStrictEqual({
      cityName: 'Austin',
      state: 'Tx',
      countryCode: undefined
    });
  });

  it(`should use setCityId correctly`, () => {
    openWeather.setCityId(12345);

    const cityId = openWeather.getAllLocations().cityId;
    expect(cityId).toBe(12345);
  });

  it(`should use setGeoCoordinates correctly`, () => {
    openWeather.setGeoCoordinates(1, 2);

    const geoCoordinates = openWeather.getAllLocations().geoCoordinates;
    expect(geoCoordinates).toStrictEqual({
      latitude: 1,
      longitude: 2
    });
  });

  it(`should use setZipcode correctly`, () => {
    openWeather.setZipCode(78754);

    const zipcode = openWeather.getAllLocations().zipcode.zipcode;
    expect(zipcode).toBe(78754);
  });

  it(`should use clearLocation correctly`, () => {
    openWeather.setCityName({
      cityName: 'Austin',
      state: 'Tx'
    });
    openWeather.clearLocation();

    const location = openWeather.getAllLocations();
    expect(location).toStrictEqual({
      city: {},
      cityId: undefined,
      geoCoordinates: {},
      zipcode: {}
    });
  });
});
