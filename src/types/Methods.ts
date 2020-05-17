import { CountryCode, QueryType } from './index'

export interface SetCurrentWeatherByCityName {
  cityName: string
  state?: string
  countryCode?: CountryCode
}

export interface IQueryType {
  queryType: QueryType
}
export interface GetByCityName extends IQueryType {
  location?: {
    cityName?: string
    state?: string
    countryCode?: CountryCode
  }
}

export interface GetByCityId extends IQueryType {
  cityId?: number
}

export interface GetByGeoCoordinates extends IQueryType {
  latitude?: number
  longitude?: number
}

export interface GetByCityName {
  cityName?: string
  state?: string
  countryCode?: CountryCode
}
