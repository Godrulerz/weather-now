// Weather codes from Open-Meteo API mapped to descriptions and emojis
export const weatherCodeDescriptions: Record<number, { description: string; icon: string }> = {
  0: { description: 'Clear sky', icon: '☀️' },
  1: { description: 'Mainly clear', icon: '🌤️' },
  2: { description: 'Partly cloudy', icon: '⛅' },
  3: { description: 'Overcast', icon: '☁️' },
  45: { description: 'Fog', icon: '🌫️' },
  48: { description: 'Depositing rime fog', icon: '🌫️' },
  51: { description: 'Light drizzle', icon: '🌦️' },
  53: { description: 'Moderate drizzle', icon: '🌦️' },
  55: { description: 'Dense drizzle', icon: '🌧️' },
  56: { description: 'Light freezing drizzle', icon: '🌨️' },
  57: { description: 'Dense freezing drizzle', icon: '🌨️' },
  61: { description: 'Slight rain', icon: '🌦️' },
  63: { description: 'Moderate rain', icon: '🌧️' },
  65: { description: 'Heavy rain', icon: '⛈️' },
  66: { description: 'Light freezing rain', icon: '🌨️' },
  67: { description: 'Heavy freezing rain', icon: '🌨️' },
  71: { description: 'Slight snow fall', icon: '🌨️' },
  73: { description: 'Moderate snow fall', icon: '❄️' },
  75: { description: 'Heavy snow fall', icon: '❄️' },
  77: { description: 'Snow grains', icon: '❄️' },
  80: { description: 'Slight rain showers', icon: '🌦️' },
  81: { description: 'Moderate rain showers', icon: '🌧️' },
  82: { description: 'Violent rain showers', icon: '⛈️' },
  85: { description: 'Slight snow showers', icon: '🌨️' },
  86: { description: 'Heavy snow showers', icon: '❄️' },
  95: { description: 'Thunderstorm', icon: '⛈️' },
  96: { description: 'Thunderstorm with slight hail', icon: '⛈️' },
  99: { description: 'Thunderstorm with heavy hail', icon: '⛈️' }
};

// Air Quality Index (AQI) levels and descriptions
// I found these descriptions online and adapted them for the app
export const aqiLevels: Record<number, { level: string; description: string; color: string; bgColor: string }> = {
  1: { level: 'Good', description: 'Air quality is satisfactory', color: 'text-green-600', bgColor: 'bg-green-100' },
  2: { level: 'Fair', description: 'Air quality is acceptable', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  3: { level: 'Moderate', description: 'Sensitive people may experience minor breathing discomfort', color: 'text-orange-600', bgColor: 'bg-orange-100' },
  4: { level: 'Poor', description: 'Everyone may begin to experience health effects', color: 'text-red-600', bgColor: 'bg-red-100' },
  5: { level: 'Very Poor', description: 'Health warnings of emergency conditions', color: 'text-purple-600', bgColor: 'bg-purple-100' }
};

export function getWeatherInfo(code: number) {
  // Return weather info for the code, or unknown if not found
  return weatherCodeDescriptions[code] || { description: 'Unknown', icon: '❓' };
}

export function getAQIInfo(aqi: number) {
  // Return AQI info for the level, or unknown if not found
  return aqiLevels[aqi] || { level: 'Unknown', description: 'AQI data unavailable', color: 'text-gray-600', bgColor: 'bg-gray-100' };
}