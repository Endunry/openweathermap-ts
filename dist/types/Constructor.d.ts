import { Unit, CountryCode } from './index';
export interface Settings {
    units?: Unit;
    language?: string;
}
export interface InitialSettings extends Settings {
    apiKey: string;
}
export interface Location {
    city: {
        cityName?: string;
        state?: string;
        countryCode?: CountryCode;
    };
    cityId?: number;
    geoCoordinates: {
        latitude?: number;
        longitude?: number;
    };
    zipcode: {
        zipcode?: string;
        countryCode?: string;
    };
}
