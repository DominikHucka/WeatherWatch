import * as React from 'react';
import MainPage from './components/mainPage';
// import { useState, useEffect } from 'react';
// import Header from './components/header';
// import MainPage from './components/mainPage';
// import Sidebar from './components/sidebar';


const App = () => {
    const apiKey = process.env.REACT_APP_API;
    // const location = navigator.geolocation.getCurrentPosition;
    const location = 'London';
    const lang = 'de';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=${lang}`;


    const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const currentIcon =
    {
        Rain: "./image/rainy.png",
        Clouds: "./image/cloudy.png",
        Snow: "./image/snow.png",
        SunnyCloudy: "./image/sunny-cloudy.png",
        Sunny: "./image/sunny.png",
        Thunderstorm: "./image/thunder.png",
    }

    React.useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
                console.log('show data', data);
            } catch (e) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [url]);


    const getIconForWeather = (weatherDescription: string) => {
        switch (weatherDescription) {
            case 'Rain':
                return currentIcon.Rain;
            case 'Clouds':
                return currentIcon.Clouds;
            case 'Snow':
                return currentIcon.Snow;
            case 'Clear':
                return currentIcon.Sunny;
            case 'Thunderstorm':
                return currentIcon.Thunderstorm;
            default:
                return currentIcon.SunnyCloudy;
        }
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weatherData && (
                <MainPage
                    weatherData={weatherData}
                    weatherIcon={getIconForWeather(weatherData.weather[0].main)}
                />
            )}
        </div>
    );
}


export default App;