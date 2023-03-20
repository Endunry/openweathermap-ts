import { CountryCode } from "./CountryCode";
export interface DirectGeoResponse {
    name: string;
    local_names: {
        [key: string]: string;
    };
    lat: number;
    lon: number;
    country: CountryCode;
    state?: string;
}
export interface ReverseGeoResponse extends DirectGeoResponse {
}
export interface ByZipCodeResponse {
    zip: string;
    name: string;
    lat: number;
    lon: number;
    country: CountryCode;
}
