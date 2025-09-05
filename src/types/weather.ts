export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  temperature: number;
  windSpeed: number;
  weatherCode: number;
  time: string;
}

export interface City {
  name: string;
  country: string;
  coordinates: Coordinates;
}

export interface GeocodingResult {
  results?: Array<{
    name: string;
    country: string;
    latitude: number;
    longitude: number;
  }>;
}

export interface WeatherApiResponse {
  current: {
    time: string;
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
}