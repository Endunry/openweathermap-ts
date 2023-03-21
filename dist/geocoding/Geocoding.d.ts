import { CountryCode } from "../types";
import BaseAPI from '../BaseAPI';
import { ByZipCodeResponse, DirectGeoResponse } from "../types/GeoResponse";
declare class Geocoding extends BaseAPI {
    constructor({ apiKey, units, language }: {
        apiKey: any;
        units: any;
        language: any;
    });
    /**
     *
     * @param cityName CityName to search for
     * @param countryCode ISO 3166 Country Codes
     * @param stateCode StateCode to filter down the search
     * @returns A Promise that resolves to a DirectGeoResponse, which includes the geo coordinates of the query
     */
    getGeoCoordinatesByLocationName(cityName: string, countryCode: CountryCode, stateCode?: string): Promise<DirectGeoResponse>;
    /**
     *
     * @param zipCode Zip Code of the Citry
     * @param countryCode ISO 3166 Country Codes
     * @returns
     */
    getGeoCoordinatesByZipCode(zipCode: string, countryCode: CountryCode): Promise<ByZipCodeResponse>;
    /**
     *
     * @param cityName
     * @returns
     */
    getGeoCoordinatesByCityName(cityName: string): Promise<DirectGeoResponse>;
    /**
     *
     * @param lat Geographical Latitude
     * @param lon Geographical Longitude
     * @param limit Number of the location names in the API response (several results can be returned in the API response)
     * @returns
     */
    getLocationNameByGeoCoordinates(lat: number, lon: number, limit?: number): Promise<DirectGeoResponse>;
}
export default Geocoding;
