// Type definitions for weather data
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

export interface ForecastData {
  time: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: number;
  windSpeed: number;
  precipitationProbability: number;
}

export interface AirQualityData {
  aqi: number;
  pm25: number;
  pm10: number;
  no2: number;
  o3: number;
  so2: number;
  co: number;
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
  daily?: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    wind_speed_10m_max: number[];
    precipitation_probability_max: number[];
  };
}

export interface AirQualityApiResponse {
  current: {
    time: string;
    european_aqi: number;
    pm2_5: number;
    pm10: number;
    nitrogen_dioxide: number;
    ozone: number;
    sulphur_dioxide: number;
    carbon_monoxide: number;
  };
}