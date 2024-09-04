import * as React from 'react';
import MainPage from './components/mainPage';
import './css/app.css';


const App = () => {
    const app = React.useRef<HTMLDivElement>(null);
    const apiKey = process.env.REACT_APP_API;
    // const location = navigator.geolocation.getCurrentPosition;
    const location = 'Reutlingen';
    const lang = 'de';
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=${lang}`;
    const dailyWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;


    const [weatherData, setWeatherData] = React.useState<any | null>(null);
    const [weatherDaily, setWeatherDaily] = React.useState<any | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const currentIcon =
    {
        Rain: "./image/rainy.png",
        Clouds: "./image/sunny-cloudy.png",
        Snow: "./image/snow.png",
        // SunnyCloudy: "./image/sunny-cloudy.png",
        Sunny: "./image/sunny.png",
        Thunderstorm: "./image/thunder.png",
    }
    // const [animation, setAnimation] = React.useState(false);


    React.useEffect(() => {
        const fetchCurrentWeatherData = async () => {
            catchCurrentWeather();
        };

        const fetchDailyWeatherData = async () => {
            catchCurrentWeather();
        };


        fetchCurrentWeatherData();
        catchDailyWeatherData();
    },
        [currentWeatherURL, dailyWeatherURL]
    );


    const catchCurrentWeather = async () => {
        try {
            let response = await fetch(currentWeatherURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
            console.log('show current weather', data);
        } catch (e) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    const catchDailyWeatherData = async () => {
        try {
            let response = await fetch(dailyWeatherURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data2 = await response.json();
            setWeatherDaily(data2);
            console.log('show daily weather', data2);
        } catch (e) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


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
                return currentIcon.Clouds;
        }
    };


    const getAnimation = (): any => {
        app.current?.classList.add('fade-in-animation');
    }


    return (
        <div ref={app}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weatherData && weatherDaily && (
                <MainPage
                    getAnimation={getAnimation}
                    weatherData={weatherData}
                    weatherDaily={weatherDaily}
                    weatherIcon={getIconForWeather(weatherData.weather[0].main)}
                />
            )}
        </div>
    );
}


export default App;