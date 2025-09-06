import { useState } from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { AirQualityCard } from './components/AirQualityCard';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { searchCity, fetchWeatherData, fetchForecastData, fetchAirQualityData } from './services/weatherService';
import type { City, WeatherData, ForecastData, AirQualityData } from './types/weather';

// TODO: add localStorage to remember last search
// TODO: maybe add a favorites feature?
// TODO: add more weather details like humidity, pressure, etc.

function App() {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');

  const handleSearch = async (cityName: string) => {
    console.log('Searching for city:', cityName); // Debug log
    setIsLoading(true);
    setError(null);
    setLastSearchedCity(cityName);

    try {
      // Get city coordinates first
      const cityData = await searchCity(cityName);
      console.log('City found:', cityData); // Debug log
      
      // Fetch all data at once - this is faster than doing it one by one
      const [weatherData, forecastData, airQualityData] = await Promise.all([
        fetchWeatherData(cityData.coordinates),
        fetchForecastData(cityData.coordinates),
        fetchAirQualityData(cityData.coordinates)
      ]);
      
      console.log('All data fetched successfully'); // Debug log
      setCity(cityData);
      setWeather(weatherData);
      setForecast(forecastData);
      setAirQuality(airQualityData);
    } catch (err) {
      console.error('Error fetching weather data:', err); // Debug log
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setCity(null);
      setWeather(null);
      setForecast(null);
      setAirQuality(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastSearchedCity) {
      handleSearch(lastSearchedCity);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-teal-600">
      <div className="container mx-auto px-4 py-12">
        {/* Header section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="text-white w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">WeatherCheck</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Check the weather anywhere
          </p>
        </div>

        <div className="mb-12">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Loading state */}
          {isLoading && <Loader />}
          
          {/* Error state */}
          {error && !isLoading && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}
          
          {/* Main content when we have data */}
          {city && weather && !isLoading && !error && (
            <>
              <WeatherCard city={city} weather={weather} />
              
              {/* Only show forecast if we have it */}
              {forecast && (
                <ForecastCard forecast={forecast} />
              )}
              
              {/* Only show air quality if we have it */}
              {airQuality && (
                <AirQualityCard airQuality={airQuality} />
              )}
            </>
          )}
          
          {/* Empty state - when nothing is loaded */}
          {!isLoading && !error && !city && !weather && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌤️</div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Try searching for a city
              </h2>
              <p className="text-blue-100 text-lg">
                Like "London" or "Tokyo"
              </p>
            </div>
          )}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-blue-100">
            Developed by{' '}
            <a
              href="https://godz.rf.gd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200 font-semibold"
            >
              Godrulerz
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;