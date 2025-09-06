# WeatherCheck 🌤️

A simple weather app I built to learn React and TypeScript. Uses the free Open-Meteo API so no API keys needed.

## What it does

* Shows weather for any city
* Search by city name  
* Displays temperature, wind speed, and weather condition
* Works on mobile and desktop

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## How it works

1. Type a city name
2. App gets coordinates from Open-Meteo geocoding API
3. Fetches weather data using those coordinates
4. Shows the weather info

## Tech stack

- React + TypeScript
- Tailwind CSS for styling
- Open-Meteo API (free, no key needed)
- Vite for building

## TODO

- [ ] Add more weather details
- [ ] Maybe add forecast?
- [ ] Fix the loading animation (looks weird on mobile)
- [ ] Add city suggestions/autocomplete

---

Made by Ashish Kumar
