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
    location = 'manhatten';
    url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.apiKey}`;

    state: AppState = {
        weatherData: undefined,
        isLoading: false,
        error: null,
    }


    componentDidMount = async () => {
        this.fetchApiData();
    }


    async fetchApiData() {
        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                console.log('weahter api', data)
                this.setState({
                    weatherData: data,
                    isLoading: false,
                })

            })
            .catch(error => {
                this.setState( {
                    isLoading: false,
                    error,
                })
            });
    }


    render() {
        const { weatherData } = this.state;

        return <React.Fragment>
            <Header />
            <MainPage currentWeather={weatherData} />
        </React.Fragment>;
    }
}

export default App;