import React, { useState } from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { searchCity, fetchWeatherData } from './services/weatherService';
import type { City, WeatherData } from './types/weather';

function App() {
  const [city, setCity] = useState<City | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchedCity, setLastSearchedCity] = useState<string>('');

  const handleSearch = async (cityName: string) => {
    setIsLoading(true);
    setError(null);
    setLastSearchedCity(cityName);

    try {
      const cityData = await searchCity(cityName);
      const weatherData = await fetchWeatherData(cityData.coordinates);
      
      setCity(cityData);
      setWeather(weatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setCity(null);
      setWeather(null);
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Cloud className="text-white w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">WeatherCheck</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get instant weather updates for any city around the world
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {isLoading && <Loader />}
          
          {error && !isLoading && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}
          
          {city && weather && !isLoading && !error && (
            <WeatherCard city={city} weather={weather} />
          )}
          
          {!isLoading && !error && !city && !weather && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌤️</div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Ready to explore the weather?
              </h2>
              <p className="text-blue-100 text-lg">
                Enter a city name above to get started
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-blue-100">
            Powered by{' '}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200"
            >
              Open-Meteo API
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;