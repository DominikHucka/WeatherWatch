import * as React from 'react';
import Header from './components/header';
import MainPage from './components/mainPage';
import snow from './assets/image/snow.png';


interface AppProps {

}

interface AppState {
    weatherData: any;
    isLoading: boolean;
    error: any;
    currentIcon: { [key: string]: string };
}

class App extends React.Component<AppProps, AppState> {
    apiKey = process.env.REACT_APP_API;
    location = navigator.geolocation.getCurrentPosition;
    lang = 'de';
    url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}&lang=${this.lang}`;
    // url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${this.apiKey}&lang={lang}`;


    state: AppState = {
        weatherData: undefined,
        isLoading: false,
        error: null,
        currentIcon: 
            {
                Rain: "./image/rainy.png",
                Cloudy: "./image/cloudy.png",
                Snow: "./image/snow.png",
                SunnyCloudy: "./image/sunny-cloudy.png",
                Sunny: "./image/sunny.png",
                Thunder: "./image/thunder.png",
            }       
    }


    componentDidMount = async () => {
        this.getLocationAndFetchWeather();
    };


    getLocationAndFetchWeather = async () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.fetchWeatherData(latitude, longitude);
            },
            (error) => {
                console.error('Error fetching location', error);
                this.setState({
                    isLoading: false,
                    error: 'Error fetching location',
                });
            }
        );
    };


    fetchWeatherData = async (latitude: number, longitude: number) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&lang=${this.lang}`;
        this.setState({ isLoading: true });

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log('show Current Weather', data)
                this.setState({
                    weatherData: data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    error,
                });
            });
    };



    render() {
        const { weatherData, currentIcon } = this.state;

        return <React.Fragment>
            <Header />
            <MainPage currentWeather={weatherData} currentIcon={currentIcon} />
        </React.Fragment>;
    }
}

export default App;