import * as React from 'react';
import MainPage from './components/mainPage';


const App = () => {
    const apiKey = process.env.REACT_APP_API;
    // const apiDaily = process.env.REACT_APP_API_DAILY;
    // const location = navigator.geolocation.getCurrentPosition;
    const location = 'Reutlingen';
    const lang = 'de';
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=${lang}`;
    // const forecastDailyURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location},DE&appid=${apiDaily}`;


    const [weatherData, setWeatherData] = React.useState<any | null>(null);
    // const [dailyData, setDailyData] = React.useState<any | null>(null);
    const [loading, setLoading] = React.useState(true);
    // const [loading2, setLoading2] = React.useState(true);
    const [error, setError] = React.useState(null);
    // const [error2, setError2] = React.useState(null);
    const currentIcon =
    {
        Rain: "./image/rainy.png",
        Clouds: "./image/sunny-cloudy.png",
        Snow: "./image/snow.png",
        // SunnyCloudy: "./image/sunny-cloudy.png",
        Sunny: "./image/sunny.png",
        Thunderstorm: "./image/thunder.png",
    }


    React.useEffect(() => {
        const fetchCurrentWeatherData = async () => {
            catchCurrentWeather();
        };


        // const fetchDailyWeatherData = async () => {
        //     catchDailyWeather();
        // };


        // fetchDailyWeatherData();
        fetchCurrentWeatherData();
    }, [currentWeatherURL]
    // [currentWeatherURL, forecastDailyURL]
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


    // const catchDailyWeather = async () => {
    //     try {
    //         let response = await fetch(forecastDailyURL);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data2 = await response.json();
    //         setDailyData(data2);
    //         console.log('show daily weather', data2);
    //     } catch (e) {
    //         setError2(error);
    //     } finally {
    //         setLoading2(false);
    //     }
    //     debugger;
    // }


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


    return (
        <div>
            {loading && <p>Loading...</p>}
            {/* {loading2 && <p>Loading...</p>} */}
            {error && <p>Error: {error}</p>}
            {/* {error2 && <p>Error: {error}</p>} */}
            {weatherData && (
                <MainPage
                    weatherData={weatherData}
                    // dailyData={dailyData}
                    weatherIcon={getIconForWeather(weatherData.weather[0].main)}
                />
            )}
        </div>
    );
}


export default App;