import * as React from 'react';
import Header from './components/header';
import MainPage from './components/mainPage';


interface AppProps {

}

interface AppState {
    weatherData: any;
    error: any;
    currentIcon: { [key: string]: string };
}

class App extends React.Component<AppProps, AppState> {
    apiKey = process.env.REACT_APP_API;
    location = navigator.geolocation.getCurrentPosition;
    lang = 'de';
    url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}&lang=${this.lang}`;


    state = {
        weatherData: undefined,
        error: null,
        currentIcon:
        {
            Rain: "./image/rainy.png",
            Clouds: "./image/cloudy.png",
            Snow: "./image/snow.png",
            SunnyCloudy: "./image/sunny-cloudy.png",
            Sunny: "./image/sunny.png",
            Thunderstorm: "./image/thunder.png",
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
                    error: 'Error fetching location',
                });
            }
        );
    };


    fetchWeatherData = async (latitude: number, longitude: number) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&lang=${this.lang}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log('show Current Weather', data)
                this.setState({
                    weatherData: data,
                });
            })
    };


    render() {

        return <React.Fragment>
            <Header />
            <MainPage currentWeather={this.state.weatherData} currentIcon={this.state.currentIcon} />
        </React.Fragment>;
    }
}

export default App;