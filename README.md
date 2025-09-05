# WeatherCheck 🌤️

A modern, responsive weather application built with **React + TypeScript** and **Tailwind CSS**. Quickly get current weather for any city using the free **Open-Meteo** API — no API keys required.

---

## ✨ Highlights

* Real-time weather for any city worldwide
* City search + geocoding (Open-Meteo geocoding)
* Clean, card-based UI with weather details (temperature, wind speed, condition & icon, last updated time)
* Mobile-first, responsive layout with smooth loading & error states
* Built with React 18, TypeScript, Vite, Tailwind CSS, and Lucide icons
* Zero-auth public APIs — easy to run locally

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone <repository-url>
cd weathercheck

# 2. Install
npm install

# 3. Dev server
npm run dev

# 4. Open
# Visit http://localhost:5173 (or the port shown by Vite)
```

---

## 📦 Available Scripts

* `npm run dev` — start dev server
* `npm run build` — bundle for production
* `npm run preview` — preview the production build locally
* `npm run lint` — run ESLint checks

---

## 🧭 Project Structure (example)

```
src/
├─ assets/
├─ components/
│  ├─ SearchBar.tsx
│  ├─ WeatherCard.tsx
│  ├─ Loader.tsx
│  └─ ErrorMessage.tsx
├─ services/
│  └─ weatherService.ts   # geocoding + weather fetch functions
├─ utils/
│  └─ weatherCodes.ts     # mapping codes → icons / labels
├─ types/
│  └─ weather.ts
├─ App.tsx
└─ main.tsx
```

---

## 🌐 API Integration

**Open-Meteo** (no key required)

* **Geocoding**
  Convert city name → latitude & longitude.

* **Weather API**
  Query current weather (temperature °C, wind speed, weather code, timestamp).

Example flow:

1. User types city name in `SearchBar`.
2. Call Open-Meteo Geocoding to get coordinates.
3. Use coordinates to request current weather from Open-Meteo.
4. Render `WeatherCard` with data + icon + last updated timestamp.

---

## 🧩 Components Overview

* **SearchBar** — input, debounce (optional), enter to search
* **WeatherCard** — city, temperature, wind speed (km/h), condition, icon, last updated
* **Loader** — friendly loading UI while requests are in flight
* **ErrorMessage** — city not found, network error, retry button

---

## ✅ UX Details

* Type-ahead or basic input with validation (no empty queries)
* Loading state while geocoding/weather requests are pending
* Clear errors:

  * "City not found" for empty geocoding results
  * "Network error" for failed fetches (with retry)
* Persist last searched city in component state (or `localStorage` if desired)
* Accessible, keyboard-friendly components and proper ARIA labels

---

## 🔧 Customization Tips

* **Add more weather params**: update `types/weather.ts` and the `weatherService` query to request hourly/forecast fields.
* **Switch units**: Open-Meteo supports metric/imperial — surface changes in the query.
* **Icons**: Edit `src/utils/weatherCodes.ts` to map weather codes to Lucide or custom SVGs.
* **Styling**: Tailwind config is ready — add design tokens or custom color palette.

---

## 🧪 Testing & Linting

* Use ESLint (TypeScript) for code quality.
* Add unit tests for `weatherService` and components (Jest + React Testing Library recommended).

---

## ♻️ Deployment

* Build with `npm run build` and deploy the `dist/` to static hosting (Netlify, Vercel, GitHub Pages).
* No environment variables required (Open-Meteo is public), but if you add other APIs you may need `.env` vars.

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch `feature/your-feature`
3. Commit, push, and open a PR
4. Follow the code style and run `npm run lint` before submitting

---

## 📝 License

MIT License — see `LICENSE` file.

---

## 👨‍💻 Developer

**Ashish Kumar (Godrulerz)**
Website: [https://godz.rf.gd](https://godz.rf.gd) — GitHub: [@Godrulerz](https://github.com/Godrulerz)

---

## Example README Badges (copy into top of README as desired)

```md
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]
[![Vite](https://img.shields.io/badge/Bundler-Vite-blue.svg)]
[![React](https://img.shields.io/badge/Framework-React-61DAFB.svg)]
[![TypeScript](https://img.shields.io/badge/Typed-TypeScript-3178C6.svg)]
```

---
