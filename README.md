# Weather App

A simple and elegant weather application built with **React**, **Vite**, **Tailwind CSS**, and powered by the [WeatherAPI](https://www.weatherapi.com/). This project showcases current weather data based on user-inputted city names with real-time API integration and local state management.

---
# Demo
https://wheater-web-eosin.vercel.app/
---

## Stack Used

- **React** – Frontend UI library
- **Vite** – Blazing fast dev server and build tool
- **Tailwind CSS** – Utility-first CSS framework for styling
- **WeatherAPI** – External weather data provider

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. **Install dependencies**
    ```bash
   npm install

3. **Set up environment variables**
- Copy the example file:
    ```bash
   cp .env.example .env

- Inside the new .env file, replace the placeholder with your actual WeatherAPI key:
    ```bash
    VITE_BASE_URL=""
    VITE_WEATHER_API_KEY=""

4. ***Run the app locally***
    ```bash
    npm run start


## ***Functionality***
- 🔍 ***City Search***: Users can input a city name to get real-time weather data.
- ✅ ***Success Toast***: A confirmation toast is shown when a city is successfully found.
- ❌ ***Error Toast***: If a city is not found or an API error occurs, an error toast is displayed.
- 🌡️ ***Temperature Toggle***: Users can switch between Celsius (°C) and Fahrenheit (°F) with a toggle.
- 💾 ***Persistent State***: The last searched city is stored in localStorage, allowing it to persist across page reloads.
- 🦴 ***Skeleton Loading***: While fetching weather data, skeleton loaders are displayed to enhance the perceived performance and improve UX during loading states.
- 📦 ***Placeholder UI***: When no city is selected yet, a placeholder card is shown.
- 📱 **Responsive Design**: All components are fully responsive, built with Tailwind CSS, and adapt seamlessly to mobile, tablet, and desktop layouts.

## ***Approach***
- Leveraged Tailwind CSS for consistent design, quick iteration, and responsive layouts.
- Applied a modular architecture with utility functions and reusable components like WeatherCard, TempToggle, and toast feedback.
- Focused on error handling and user feedback with toast notifications, and built a smooth initial state using placeholder components.
- No route system was created as it is just a page and a simple mvp demonstration
- Created a hook simulating the functionality of react-query, since we only have one request in the project.



