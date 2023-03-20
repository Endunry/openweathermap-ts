import { constants } from "buffer";
import {DIRECT_GEO, GEOCODING_API_NAME, GEOCODING_API_VERSION, REVERSE_GEO, ZIP_GEO } from "../helpers";
import { CountryCode, InitialSettings } from "../types";
import BaseAPI from '../BaseAPI';
import { ByZipCodeResponse, DirectGeoResponse } from "../types/GeoResponse";
import fetch from "node-fetch";
class Geocoding extends BaseAPI {

    constructor({
        apiKey,
        units,
        language
    }) {
        super({
            apiKey,
            units,
            language
        })
        this.BASE_URL += GEOCODING_API_NAME + GEOCODING_API_VERSION;
    }

    /**
     * 
     * @param cityName CityName to search for
     * @param countryCode ISO 3166 Country Codes
     * @param stateCode StateCode to filter down the search
     * @returns A Promise that resolves to a DirectGeoResponse, which includes the geo coordinates of the query
     */
    public getGeoCoordinatesByLocationName(cityName: string, countryCode: CountryCode, stateCode?: string): Promise<DirectGeoResponse> {
        return new Promise<DirectGeoResponse>(async (resolve, reject) => {
            try {
                const query = `q=${cityName},${stateCode},${countryCode}`;
                const requestUrl = this.buildURL(DIRECT_GEO, query);
                const response = await fetch(requestUrl);
                const data = await response.json() as DirectGeoResponse;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param zipCode Zip Code of the Citry
     * @param countryCode ISO 3166 Country Codes
     * @returns 
     */
    public getGeoCoordinatesByZipCode(zipCode: string, countryCode: CountryCode): Promise<ByZipCodeResponse> {
        return new Promise<ByZipCodeResponse>(async (resolve, reject) => {
            try {
                const query = `zip=${zipCode},${countryCode}`;
                const requestUrl = this.buildURL(ZIP_GEO, query);
                const response = await fetch(requestUrl);
                const data = await response.json() as ByZipCodeResponse;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param cityName 
     * @returns 
     */
    public getGeoCoordinatesByCityName(cityName: string): Promise<DirectGeoResponse> {
        return new Promise<DirectGeoResponse>(async (resolve, reject) => {
            try {
                const query = `q=${cityName}`;
                const requestUrl = this.buildURL(DIRECT_GEO, query);
                const response = await fetch(requestUrl);
                const data = await response.json() as DirectGeoResponse;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param lat Geographical Latitude
     * @param lon Geographical Longitude
     * @param limit Number of the location names in the API response (several results can be returned in the API response)
     * @returns 
     */
    public getLocationNameByGeoCoordinates(lat: number, lon: number, limit?: number): Promise<DirectGeoResponse> {
        return new Promise<DirectGeoResponse>(async (resolve, reject) => {
            try {
                const query = `lat=${lat}&lon=${lon}`;
                if(limit) query.concat(`&limit=${limit}`);
                const requestUrl = this.buildURL(REVERSE_GEO, query);
                const response = await fetch(requestUrl);
                const data = await response.json() as DirectGeoResponse;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }


}

export default Geocoding;