import * as React from 'react';
import Header from './components/header';
import MainPage from './components/mainPage';
import { AnyMxRecord } from 'dns';


interface AppProps {

}

interface AppState {
    weatherData: any;
    isLoading: boolean;
    error: any;
}

class App extends React.Component<AppProps, AppState> {
    apiKey = process.env.REACT_APP_API;


    state: AppState = {
        weatherData: undefined,
        isLoading: false,
        error: null,
    }


    componentDidMount = async () => {
        this.fetchApiData();
    }


    async fetchApiData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=reutlingen&appid=${this.apiKey}`;
        try {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Fehler: ${res.status} ${res.statusText}`);
            }
            let resAsJSON = await res.json();
            console.log('current Weather Data', resAsJSON);
            this.setState({ weatherData: resAsJSON })
        } catch (error: any) {
            console.error('ERROR', error);
            this.setState({ error: error.message })
        } finally {
            this.setState({ isLoading: false })
        }

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('weahter api', data)
        //         this.setState({ weatherData: data })
        //     })
        //     .catch(error => console.error('Fetching Failed', error));

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