export type QueryType = WeatherQueryType | GeoQueryType;

export type WeatherQueryType = 'weather' | 'forecast';
export type GeoQueryType = 'direct' | 'reverse' | 'zip';