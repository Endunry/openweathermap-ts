import { Unit, Language, QueryType, InitialSettings } from './types';
declare class BaseAPI {
    protected settings: InitialSettings;
    protected BASE_URL: string;
    constructor({ apiKey, units, language }: InitialSettings);
    setApiKey(apiKey: string): void;
    setUnits(units: Unit): void;
    setLanguage(language: Language): void;
    clearSettings(): void;
    getAllSettings(): InitialSettings;
    protected buildURL(queryType: QueryType, query: string): string;
}
export default BaseAPI;
