import fetch from 'node-fetch';
import {
  Unit,
  CountryCode,
  Language,
  QueryType,
  InitialSettings,
  Location,
  SetCurrentWeatherByCityName,
  GetByCityName,
  GetByCityId,
  GetByGeoCoordinates
} from './types';
import { SCHEME, API_HOST, WEATHER_API_VERSION, WEATHER_API_NAME } from './helpers';
import BaseAPI from './BaseAPI';
import Geocoding from './geocoding/Geocoding';

class OpenWeather extends BaseAPI {
  protected location: Location;

  protected geocoding: Geocoding;

  constructor({
    apiKey,
    units = 'imperial',
    language = 'en' 
  }: InitialSettings) {
    super({
      apiKey,
      units,
      language
    })
    this.BASE_URL += WEATHER_API_NAME + WEATHER_API_VERSION;
    this.location = {
      city: {},
      cityId: undefined,
      geoCoordinates: {},
      zipcode: {}
    };
    this.geocoding = new Geocoding({ apiKey, units, language });
  }

  // ***
  // ***
  // Setters
  // ***
  // ***

  public setApiKey(apiKey: string) {
    this.settings.apiKey = apiKey;
  }

  public setUnits(units: Unit) {
    this.settings.units = units;
  }

  public setLanguage(language: Language) {
    this.settings.language = language;
  }

  public setCityName({
    cityName,
    state,
    countryCode
  }: SetCurrentWeatherByCityName) {
    this.location.city = {
      ...this.location.city,
      cityName,
      state,
      countryCode
    };
  }

  public setCityId(cityId: number) {
    this.location.cityId = cityId;
  }

  public setGeoCoordinates(latitude: number, longitude: number) {
    this.location.geoCoordinates = {
      ...this.location.geoCoordinates,
      latitude,
      longitude
    };
  }

  public setZipCode(zipcode: string, countryCode?: CountryCode) {
    this.location.zipcode = {
      ...this.location.zipcode,
      zipcode,
      countryCode
    };
  }

  public clearSettings() {
    this.settings = {
      apiKey: 'youNeedValidApiKey',
      units: 'imperial',
      language: 'en'
    };
  }

  public clearLocation() {
    this.location = {
      city: {},
      cityId: undefined,
      geoCoordinates: {},
      zipcode: {}
    };
  }

  // ***
  // ***
  // Getters
  // ***
  // ***

  public getAllSettings() {
    return this.settings;
  }

  public getAllLocations() {
    return this.location;
  }


  // ***
  // ***
  // Parent Getters
  // ***
  // ***
  /**
   * @summary Use the built-in API to get by city name (deprecated, but still useable)
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
  public builtInGetByCityName({ location, queryType }: GetByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!location?.cityName && !this.location.city.cityName) {
          throw new Error(
            `cityName missing, please pass it via argument or set it using setCityName method`
          );
        }

        const cityName = location?.cityName || this.location.city.cityName;
        const state = location?.state || this.location.city.state;
        const countryCode =
          location?.countryCode || this.location.city.countryCode;

        const query = `q=${cityName}${state ? ',' + state : ''}${countryCode ? ',' + countryCode : ''
          }`;
        const request = this.buildURL(queryType, query);

        const response = await fetch(request);
        const currentWeather = await response.json();

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }
  


  /**
   * @summary Uses the Geocoding API to first get the coordinates of the city name, then uses the coordinates to get the weather data.
   */
  public getByCityName({ location, queryType }: GetByCityName) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!location?.cityName && !this.location.city.cityName) {
          throw new Error(
            `cityName missing, please pass it via argument or set it using setCityName method`
          );
        }

        const cityName = location?.cityName || this.location.city.cityName;
        const state = location?.state || this.location.city.state;
        const countryCode =
          location?.countryCode || this.location.city.countryCode;

        const coordinates = await this.geocoding.getGeoCoordinatesByLocationName(cityName, countryCode, state);

        const { lat: latitude, lon: longitude } = coordinates[0];
        

        const currentWeather = this.getByGeoCoordinates({ latitude, longitude, queryType });

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * 
   * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
   */
  public getByCityId({ cityId, queryType }: GetByCityId) {
    return new Promise(async (resolve, reject) => {
      try {
        const { location } = this;

        if (!cityId && !location.cityId) {
          throw new Error(
            `cityId missing, please pass it via argument or set it using setCityId method`
          );
        }

        cityId = cityId || location.cityId;

        const query = `id=${cityId}`;
        const request = this.buildURL(queryType, query);

        const response = await fetch(request);
        const currentWeather = await response.json();

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }


  public getByGeoCoordinates({
    latitude,
    longitude,
    queryType
  }: GetByGeoCoordinates) {
    return new Promise(async (resolve, reject) => {
      try {
        if (
          (!latitude || !longitude) &&
          (!this.location.geoCoordinates.latitude ||
            !this.location.geoCoordinates.longitude)
        ) {
          throw new Error(
            `latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method`
          );
        }

        latitude = latitude || this.location.geoCoordinates.latitude;
        longitude = longitude || this.location.geoCoordinates.longitude;

        const query = `lat=${latitude}&lon=${longitude}`;
        const request = this.buildURL(queryType, query);

        const response = await fetch(request);
        const currentWeather = await response.json();

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
 * 
 * @deprecated  Please note that API requests by city name, zip-codes and city id have been deprecated. Although they are still available for use, bug fixing and updates are no longer available for this functionality. Please use Geocoder API if you need automatic convert city names and zip-codes to corrdinates vice versa. (https://openweathermap.org/forecast5#builtin)
 */
  public builtInGetByZipcode(
    zipcode: string,
    queryType: QueryType,
    countryCode?: CountryCode
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const { location } = this;

        if (!zipcode && !location.zipcode.zipcode) {
          throw new Error(
            `zipcode missing, please pass it via argument or set it using setZipcode method`
          );
        }

        zipcode = zipcode || location.zipcode.zipcode;

        const query = `zip=${zipcode}${countryCode ? ',' + countryCode : ''}`;
        const request = this.buildURL(queryType, query);

        const response = await fetch(request);
        const currentWeather = await response.json();

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }

  public getByZipcode(
    zipcode: string,
    queryType: QueryType,
    countryCode?: CountryCode
  ) {
    return new Promise(async (resolve, reject) => {
      try {
        const { location } = this;

        if (!zipcode && !location.zipcode.zipcode) {
          throw new Error(
            `zipcode missing, please pass it via argument or set it using setZipcode method`
          );
        }

        zipcode = zipcode || location.zipcode.zipcode;

        const coordinates = await this.geocoding.getGeoCoordinatesByZipCode(zipcode, countryCode);


        const currentWeather = this.getByGeoCoordinates({ latitude: coordinates.lat, longitude: coordinates.lon, queryType });

        resolve(currentWeather);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default OpenWeather;
