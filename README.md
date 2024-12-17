# Simple Weather Dashboard

### Screenshot
![Screenshot 2024-12-17 161152](https://github.com/user-attachments/assets/5502bf48-bf85-4a41-b1fa-792361a96abc)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Weather Dashboard

Weather Dashboard is a React-based weather application that allows users to view current weather information and forecasts for the upcoming days. This application uses the OpenWeatherMap API to display data such as the weather conditions, air quality (AQI), temperature, humidity, wind speed, and rainfall. The app also provides features to search for a city, select temperature units (Celsius/Fahrenheit), save favorite cities, and supports two languages (Indonesian and English).

## Key Features
- **City Search**: Enter a city name to see the current weather and forecast.
- **Temperature Units**: Choose between Celsius and Fahrenheit for temperature display.
- **7-Day Weather Forecast**: View the daily weather forecast for the next 7 days.
- **Air Quality (AQI)**: Displays the air quality index based on the city.
- **Rainfall**: Shows rainfall data for the last 1 hour.
- **Language Support**: Choose between Indonesian and English for the interface.
- **Favorite Cities**: Save favorite cities for easy access.
- **Responsive Design**: The app is accessible and user-friendly on both desktop and mobile devices.

## Technologies Used
- React
- OpenWeatherMap API
- Tailwind CSS
- React Hooks
- JavaScript

## Requirements
Make sure you have the latest version of Node.js and npm (Node Package Manager) installed on your system.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/username/weather-dashboard.git
   ```

2. Navigate to the project directory:
  ```bash
  cd weather-dashboard
  ```

3. Install dependencies:
  ```bash
  npm install
  ```

4. Start the app:
  ```bash
  npm start
  ```
The app will be available at http://localhost:3000.

## Getting an API Key
To get an API key from OpenWeatherMap:
- Visit OpenWeatherMap.
- Sign up and create an account.
- After registering, you can find your API key on your account dashboard.

Replace the API key in the App.js file with your own:
```const API_KEY = 'YOUR_API_KEY';```

## Contribution
If you want to contribute to this project, you can submit a pull request by adding new features or fixing bugs. Please create an issue before submitting any changes.
- Fork this repository.
- Create a new branch for your feature (git checkout -b your-feature).
- Commit your changes (git commit -m 'Add new feature').
- Push your branch to your fork (git push origin your-feature).
- Open a pull request on GitHub.

Enjoy!
