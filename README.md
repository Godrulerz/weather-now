# WeatherCheck 🌤️

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get instant weather updates for any city around the world with a beautiful, intuitive interface.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **City Search**: Search for cities by name with geocoding support
- **Weather Details**: View temperature, wind speed, weather conditions, and last updated time
- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Error Handling**: Graceful error handling with retry functionality
- **Loading States**: Smooth loading animations and user feedback
- **Modern UI**: Clean, modern interface with hover effects and transitions

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **API**: Open-Meteo (free weather API)
- **Linting**: ESLint with TypeScript support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## 🌐 API Integration

This application uses the **Open-Meteo API** for weather data:

- **Geocoding API**: For city search and coordinates lookup
- **Weather API**: For current weather data including temperature, wind speed, and weather conditions

The API is free and doesn't require an API key, making it easy to run the application immediately.

## 📁 Project Structure



## 🎨 Features in Detail

### Search Functionality
- Type-ahead city search with real-time geocoding
- Support for cities worldwide
- Input validation and error handling

### Weather Display
- Current temperature in Celsius
- Wind speed in km/h
- Weather condition with appropriate icons
- Last updated timestamp
- Beautiful card-based layout

### User Experience
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Loading states and error handling
- Retry functionality for failed requests

## 🔧 Customization

### Adding New Weather Data
To add more weather parameters, update the types in `src/types/weather.ts` and modify the API calls in `src/services/weatherService.ts`.

### Styling
The application uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the component files or updating the Tailwind configuration.

### Weather Icons
Weather icons are managed in `src/utils/weatherCodes.ts`. You can add or modify weather condition mappings there.

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices with touch-friendly interfaces and appropriate sizing.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Open-Meteo](https://open-meteo.com/) for providing the free weather API
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**WeatherCheck** - Stay informed about the weather, beautifully. 🌤️
