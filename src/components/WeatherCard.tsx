import React from 'react';
import { MapPin, Wind, Thermometer, Clock } from 'lucide-react';
import type { City, WeatherData } from '../types/weather';
import { getWeatherInfo } from '../utils/weatherCodes';

interface WeatherCardProps {
  city: City;
  weather: WeatherData;
}

export function WeatherCard({ city, weather }: WeatherCardProps) {
  const weatherInfo = getWeatherInfo(weather.weatherCode);
  const lastUpdated = new Date(weather.time).toLocaleString();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md mx-auto transform hover:scale-105 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <MapPin className="text-blue-600 w-6 h-6" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{city.name}</h2>
            <p className="text-gray-600">{city.country}</p>
          </div>
        </div>
        <div className="text-4xl">
          {weatherInfo.icon}
        </div>
      </div>

      {/* Main Weather Info */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-2">
          <Thermometer className="text-orange-500 w-8 h-8 mr-2" />
          <span className="text-5xl font-bold text-gray-800">{weather.temperature}</span>
          <span className="text-2xl text-gray-600 ml-1">°C</span>
        </div>
        <p className="text-xl text-gray-700 font-medium">{weatherInfo.description}</p>
      </div>

      {/* Additional Info */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <Wind className="text-teal-600 w-5 h-5" />
            <span className="text-gray-700 font-medium">Wind Speed</span>
          </div>
          <span className="text-gray-800 font-semibold">{weather.windSpeed} km/h</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center space-x-3">
            <Clock className="text-purple-600 w-5 h-5" />
            <span className="text-gray-700 font-medium">Last Updated</span>
          </div>
          <span className="text-gray-800 font-semibold text-sm">{lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}