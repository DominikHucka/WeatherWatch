import * as React from 'react';
import Header from './components/header';
import MainPage from './components/mainPage';


interface AppProps {

}

interface AppState {
    weatherData: any;
}

class App extends React.Component<AppProps, AppState> {
    apiKey = process.env.REACT_APP_API;


    state: AppState = {
        weatherData: undefined
    }


    componentDidMount = () => {
        this.fetchApiData();
    }


    fetchApiData() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=reutlingen&appid=${this.apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log('weahter api', data)
                this.setState({ weatherData: data })
            })
            .catch(error => console.error('Fetching Failed', error));
    }


    render() {
        const { weatherData } = this.state;

        return <React.Fragment>
            <Header />
            <MainPage weatherData={weatherData} />
        </React.Fragment>;
    }
}

export default App;