import { Unit, CountryCode, Language, QueryType, InitialSettings, Location, SetCurrentWeatherByCityName, GetByCityName, GetByCityId, GetByGeoCoordinates } from './types';
declare class OpenWeather {
    private settings;
    private BASE_URL;
    private location;
    constructor({ apiKey, units, language, }: InitialSettings);
    setApiKey(apiKey: string): void;
    setUnits(units: Unit): void;
    setLanguage(language: Language): void;
    setCityName({ cityName, state, countryCode, }: SetCurrentWeatherByCityName): void;
    setCityId(cityId: number): void;
    setGeoCoordinates(latitude: number, longitude: number): void;
    setZipCode(zipcode: number, countryCode?: CountryCode): void;
    clearSettings(): void;
    clearLocation(): void;
    getAllSettings(): InitialSettings;
    getAllLocations(): Location;
    private buildURL;
    protected getByCityName({ location, queryType }: GetByCityName): Promise<unknown>;
    protected getByCityId({ cityId, queryType }: GetByCityId): Promise<unknown>;
    protected getByGeoCoordinates({ latitude, longitude, queryType, }: GetByGeoCoordinates): Promise<unknown>;
    protected getByZipcode(zipcode: number, queryType: QueryType, countryCode?: CountryCode): Promise<unknown>;
}
export default OpenWeather;
