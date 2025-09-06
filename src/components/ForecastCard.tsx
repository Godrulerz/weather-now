import { Calendar, Thermometer, Wind, Droplets } from 'lucide-react';
import type { ForecastData } from '../types/weather';
import { getWeatherInfo } from '../utils/weatherCodes';

// Props for the forecast component
interface ForecastCardProps {
  forecast: ForecastData[];
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  // Helper function to format dates - I like this format better than the default
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Check if this forecast is for today - needed for highlighting
  const isToday = (dateString: string) => {
    const today = new Date();
    const forecastDate = new Date(dateString);
    return today.toDateString() === forecastDate.toDateString();
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 max-w-6xl mx-auto">
      {/* Header section */}
      <div className="flex items-center mb-6">
        <Calendar className="text-blue-600 w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">7-Day Forecast</h2>
      </div>

      {/* Forecast grid - responsive design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
        {forecast.map((day, index) => {
          const weatherInfo = getWeatherInfo(day.weatherCode);
          const isTodayForecast = isToday(day.time);
          
          return (
            <div 
              key={day.time} 
              className={`p-4 rounded-2xl border-2 transition-all duration-200 hover:shadow-md ${
                isTodayForecast 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                {/* Date display */}
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {isTodayForecast ? 'Today' : formatDate(day.time)}
                </div>
                
                {/* Weather icon */}
                <div className="text-3xl mb-3">
                  {weatherInfo.icon}
                </div>
                
                {/* Weather description */}
                <div className="text-xs text-gray-600 mb-2">
                  {weatherInfo.description}
                </div>
                
                {/* Temperature display */}
                <div className="flex items-center justify-center mb-3">
                  <Thermometer className="text-orange-500 w-4 h-4 mr-1" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">
                      {day.temperatureMax}°
                    </div>
                    <div className="text-sm text-gray-600">
                      {day.temperatureMin}°
                    </div>
                  </div>
                </div>
                
                {/* Additional weather info */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Wind className="text-teal-600 w-3 h-3 mr-1" />
                      <span className="text-gray-600">Wind</span>
                    </div>
                    <span className="font-medium text-gray-800">
                      {day.windSpeed} km/h
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Droplets className="text-blue-600 w-3 h-3 mr-1" />
                      <span className="text-gray-600">Rain</span>
                    </div>
                    <span className="font-medium text-gray-800">
                      {day.precipitationProbability}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
