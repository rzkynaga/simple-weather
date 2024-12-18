# Simple Weather Dashboard

This project displays the current weather information of a specific city using OpenWeather API and includes a weather widget for better visualization. The app uses React to render weather data such as temperature, humidity, wind speed, precipitation, and air quality index (AQI).

## Features

- Displays weather information for a specific city.
- Shows temperature, humidity, wind speed, precipitation, and AQI.
- Integrates OpenWeather widget to provide a live weather forecast.
- Fully responsive design with Tailwind CSS.
- AQI levels are dynamically colored based on the air quality.

## Technologies Used

- **React**: Front-end framework to build the app.
- **OpenWeather API**: Provides weather data (temperature, humidity, wind speed, etc.).
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **OpenWeather Widget**: Displays an interactive weather widget for the selected city.

## Screenshot
![Screenshot 2024-12-18 102917](https://github.com/user-attachments/assets/4f5158ae-3255-4316-a42a-ee93d6bb4822)

## Setup
Follow the steps below to set up the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-card-react.git
cd weather-card-react
```
### 2. Install dependencies
Make sure you have Node.js installed. Then, run the following command to install the required dependencies:
```bash
npm install
```
### 3. Configure OpenWeather API key
To get the weather data, you need a valid API key from OpenWeather. You can get your API key by signing up at OpenWeather.

After obtaining your API key, replace the appid in the script within the WeatherCard.js file or store it in an environment variable:
```bash
appid: 'YOUR_API_KEY_HERE',
```
### 4. Run the app
Now that everything is set up, run the development server:
```bash
npm start
```
This will start the React app, and you can view it by navigating to http://localhost:3000 in your browser.

## Usage
The weather data is fetched using the OpenWeather API based on a specified city. The widget will display the current weather conditions for the city. The AQI (Air Quality Index) is displayed with color-coded levels, indicating the air quality in the area.

## Customization
You can change the city by modifying the cityid property in the widget script or updating the city prop when using the WeatherCard component.

For example, to display weather for a different city, change the cityid:
```bash
cityid: 'CITY_ID', // Replace with the desired city ID
```

## Contribution
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. For any issues or suggestions, please open an issue on the GitHub repository.

-ikjoen
