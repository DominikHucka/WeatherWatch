import * as React from 'react';
import Header from './components/header';
import MainPage from './components/mainPage';


interface AppProps {

}

interface AppState {
    weatherData: any;
    isLoading: boolean;
    error: any;
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


    // componentDidMount = async () => {
    //     this.fetchApiData();
    // }


    // async fetchApiData() {
    //     fetch(this.url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('weahter api', data)
    //             this.setState({
    //                 weatherData: data,
    //                 isLoading: false,
    //             })

    //         })
    //         .catch(error => {
    //             this.setState( {
    //                 isLoading: false,
    //                 error,
    //             })
    //         });
    // }


    render() {
        const { weatherData } = this.state;

        return <React.Fragment>
            <Header />
            <MainPage currentWeather={weatherData} />
        </React.Fragment>;
    }
}

export default App;