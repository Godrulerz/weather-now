import type { 
  Coordinates, 
  WeatherData, 
  City, 
  GeocodingResult, 
  WeatherApiResponse, 
  ForecastData, 
  AirQualityData, 
  AirQualityApiResponse 
} from '../types/weather';

// Open-Meteo API endpoints (free, no key needed)
const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';
const AIR_QUALITY_API = 'https://air-quality-api.open-meteo.com/v1/air-quality';

export async function searchCity(cityName: string): Promise<City> {
  // Get city coordinates from geocoding API
  const response = await fetch(`${GEOCODING_API}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
  
  if (!response.ok) {
    throw new Error('Could not find city');
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
  // Get current weather data
  const response = await fetch(
    `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`
  );
  
  if (!response.ok) {
    throw new Error('Could not get weather data');
  }
  
  const data: WeatherApiResponse = await response.json();
  
  return {
    temperature: Math.round(data.current.temperature_2m), // Round to whole number
    windSpeed: Math.round(data.current.wind_speed_10m),
    weatherCode: data.current.weather_code,
    time: data.current.time
  };
}

export async function fetchForecastData(coordinates: Coordinates): Promise<ForecastData[]> {
  const { latitude, longitude } = coordinates;
  
  // Get 7-day forecast data from Open-Meteo
  const response = await fetch(
    `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code,wind_speed_10m_max,precipitation_probability_max&timezone=auto&forecast_days=7`
  );
  
  if (!response.ok) {
    throw new Error('Could not get forecast data');
  }
  
  const data: WeatherApiResponse = await response.json();
  
  if (!data.daily) {
    throw new Error('No forecast data available');
  }
  
  // Convert the API response to our format
  const forecast: ForecastData[] = [];
  for (let i = 0; i < data.daily.time.length; i++) {
    forecast.push({
      time: data.daily.time[i],
      temperatureMax: Math.round(data.daily.temperature_2m_max[i]), // Round to whole number
      temperatureMin: Math.round(data.daily.temperature_2m_min[i]),
      weatherCode: data.daily.weather_code[i],
      windSpeed: Math.round(data.daily.wind_speed_10m_max[i]),
      precipitationProbability: data.daily.precipitation_probability_max[i]
    });
  }
  
  return forecast;
}

export async function fetchAirQualityData(coordinates: Coordinates): Promise<AirQualityData> {
  const { latitude, longitude } = coordinates;
  // Get air quality data
  const response = await fetch(
    `${AIR_QUALITY_API}?latitude=${latitude}&longitude=${longitude}&current=european_aqi,pm2_5,pm10,nitrogen_dioxide,ozone,sulphur_dioxide,carbon_monoxide&timezone=auto`
  );
  
  if (!response.ok) {
    throw new Error('Could not get air quality data');
  }
  
  const data: AirQualityApiResponse = await response.json();
  
  return {
    aqi: data.current.european_aqi,
    pm25: Math.round(data.current.pm2_5 * 10) / 10, // Round to 1 decimal
    pm10: Math.round(data.current.pm10 * 10) / 10,
    no2: Math.round(data.current.nitrogen_dioxide * 10) / 10,
    o3: Math.round(data.current.ozone * 10) / 10,
    so2: Math.round(data.current.sulphur_dioxide * 10) / 10,
    co: Math.round(data.current.carbon_monoxide * 10) / 10,
    time: data.current.time
  };
}