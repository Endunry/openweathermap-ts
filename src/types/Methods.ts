import { CountryCode, QueryType } from './index'

//
// Parent Methods
//

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

//
// children methods
//
export interface GetByCityNameChild {
  cityName?: string
  state?: string
  countryCode?: CountryCode
}
