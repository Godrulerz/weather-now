import { Wind, Clock, AlertCircle } from 'lucide-react';
import type { AirQualityData } from '../types/weather';
import { getAQIInfo } from '../utils/weatherCodes';

// Props for air quality component
interface AirQualityCardProps {
  airQuality: AirQualityData;
}

export function AirQualityCard({ airQuality }: AirQualityCardProps) {
  const aqiInfo = getAQIInfo(airQuality.aqi);
  const lastUpdated = new Date(airQuality.time).toLocaleString();

  // Simple function to get emoji based on AQI - I like using emojis for this
  const getAQIIcon = (aqi: number) => {
    if (aqi <= 2) return '😊';  // Good air quality
    if (aqi <= 3) return '😐';  // Fair
    if (aqi <= 4) return '😷';  // Poor - wear a mask
    return '⚠️';  // Very poor - warning
  };

  // Color coding for different AQI levels
  const getAQIColor = (aqi: number) => {
    if (aqi <= 2) return 'text-green-600';
    if (aqi <= 3) return 'text-yellow-600';
    if (aqi <= 4) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Wind className="text-teal-600 w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-gray-800">Air Quality Index</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main AQI display - the big one */}
        <div className={`p-6 rounded-2xl ${aqiInfo.bgColor} border-2 ${aqiInfo.color.replace('text-', 'border-')}`}>
          <div className="text-center">
            <div className="text-4xl mb-2">
              {getAQIIcon(airQuality.aqi)}
            </div>
            <div className={`text-3xl font-bold mb-2 ${aqiInfo.color}`}>
              {airQuality.aqi}
            </div>
            <div className={`text-lg font-semibold mb-2 ${aqiInfo.color}`}>
              {aqiInfo.level}
            </div>
            <div className="text-sm text-gray-600">
              {aqiInfo.description}
            </div>
          </div>
        </div>

        {/* All the pollutant details */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <AlertCircle className="text-blue-600 w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-gray-700">PM2.5</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {airQuality.pm25} μg/m³
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <AlertCircle className="text-green-600 w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-gray-700">PM10</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {airQuality.pm10} μg/m³
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <AlertCircle className="text-yellow-600 w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-gray-700">NO₂</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {airQuality.no2} μg/m³
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <AlertCircle className="text-orange-600 w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-gray-700">O₃</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {airQuality.o3} μg/m³
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <AlertCircle className="text-red-600 w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-gray-700">SO₂</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {airQuality.so2} μg/m³
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center">
              <AlertCircle className="text-purple-600 w-4 h-4 mr-2" />
              <span className="text-sm font-medium text-gray-700">CO</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              {airQuality.co} mg/m³
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-2" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
