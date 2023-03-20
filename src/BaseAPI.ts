import {
  Unit,
  Language,
  QueryType,
  InitialSettings,
} from './types';
import { SCHEME, API_HOST} from './helpers';

class BaseAPI {
  protected settings: InitialSettings;
  protected BASE_URL: string;

  constructor({
    apiKey,
    units = 'imperial',
    language = 'en'
  }: InitialSettings) {
    this.settings = {
      apiKey,
      units,
      language
    };
    this.BASE_URL = SCHEME + API_HOST;
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

  public clearSettings() {
    this.settings = {
      apiKey: 'youNeedValidApiKey',
      units: 'imperial',
      language: 'en'
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

  // ***
  // ***
  // Private
  // ***
  // ***

  protected buildURL(queryType: QueryType, query: string) {
    const { BASE_URL, settings } = this;

    return `${BASE_URL + queryType}?${query}&appid=${settings.apiKey}&units=${
      settings.units
    }&lang=${settings.language}`;
  }

}

export default BaseAPI;
