import { CountryCode } from "./CountryCode";

export type DirectGeoResponse = DirectGeoResponseItem[]
export interface DirectGeoResponseItem {
    name: string;
    // Map, where key is the language code, and value is the name of the city in that language
    local_names: { [key: string]: string };
    lat: number;
    lon: number;
    country: CountryCode;
    state?: string; // Name of the State (if found) e.g. "CA" for California
}

export interface ReverseGeoResponse extends DirectGeoResponse {}

export interface ByZipCodeResponse {
    zip: string;
    name: string;
    lat: number;
    lon: number;
    country: CountryCode;
}
