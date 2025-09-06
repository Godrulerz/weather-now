# WeatherCheck 🌤️

A modern weather application built with React and TypeScript. Features real-time weather data, 7-day forecasts, and air quality information for any city worldwide. Uses the free Open-Meteo API - no API keys required.

## ✨ Latest Features Added

* **7-Day Weather Forecast** - Complete weekly weather predictions with daily high/low temperatures, wind speed, and precipitation probability
* **Air Quality Index (AQI)** - Comprehensive air quality data including PM2.5, PM10, NO₂, O₃, SO₂, and CO measurements with health impact descriptions
* **Enhanced UI/UX** - Responsive grid layouts, color-coded AQI levels, and improved mobile experience
* **Parallel Data Fetching** - Optimized performance with simultaneous API calls for faster loading

## What it does

* Shows current weather for any city worldwide
* Displays 7-day weather forecast with detailed predictions
* Provides comprehensive air quality information
* Search by city name with real-time geocoding
* Displays temperature, wind speed, weather conditions, and AQI
* Works seamlessly on mobile and desktop

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## How it works

1. Type a city name in the search bar
2. App gets coordinates from Open-Meteo geocoding API
3. Fetches current weather, 7-day forecast, and air quality data simultaneously
4. Displays comprehensive weather information with interactive cards
5. Shows real-time updates and health recommendations based on air quality

## Tech stack

- **React 18** + **TypeScript 5.5** - Modern UI framework with type safety
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Vite** - Fast build tool and development server
- **Lucide React** - Modern icon library
- **Open-Meteo API** - Free weather, forecast, and air quality data (no API key required)

## Features

- 🌤️ **Current Weather** - Real-time temperature, wind speed, and conditions
- 📅 **7-Day Forecast** - Weekly weather predictions with daily details
- 🌬️ **Air Quality Index** - Comprehensive AQI data with health recommendations
- 🌍 **Global Coverage** - Search any city worldwide
- 📱 **Responsive Design** - Optimized for mobile and desktop
- ⚡ **Fast Performance** - Parallel API calls and optimized loading
- 🎨 **Modern UI** - Clean, card-based interface with smooth animations

## TODO

- [ ] Add city suggestions/autocomplete
- [ ] Add weather alerts and notifications
- [ ] Implement weather history tracking
- [ ] Add more detailed weather maps

---

**Developed by [Godrulerz](https://godz.rf.gd)**
