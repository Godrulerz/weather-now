import type { Coordinates, WeatherData, City, GeocodingResult, WeatherApiResponse } from '../types/weather';

const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';

export async function searchCity(cityName: string): Promise<City> {
  const response = await fetch(`${GEOCODING_API}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch city data');
  }
  
  const data: GeocodingResult = await response.json();
  
  if (!data.results || data.results.length === 0) {
    throw new Error('City not found');
  }
  
  const result = data.results[0];
  
  return {
    name: result.name,
    country: result.country,
    coordinates: {
      latitude: result.latitude,
      longitude: result.longitude
    }
  };
}

export async function fetchWeatherData(coordinates: Coordinates): Promise<WeatherData> {
  const { latitude, longitude } = coordinates;
  const response = await fetch(
    `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  
  const data: WeatherApiResponse = await response.json();
  
  return {
    temperature: Math.round(data.current.temperature_2m),
    windSpeed: Math.round(data.current.wind_speed_10m),
    weatherCode: data.current.weather_code,
    time: data.current.time
  };
}