import * as React from 'react';
import Header from './components/header';
import MainPage from './components/mainPage';


interface AppProps {

}

interface AppState {
    weatherData: any;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        weatherData: null,
    }   
    apiKey = process.env.REACT_APP_API;
    

    componentDidMount = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=reutlingen&appid=${this.apiKey}`)
        .then(res => res.json())
        .then(data => this.setState({weatherData: data}))
        .catch(error => console.error('Fetching Failed', error));
    }

    render() {
 
        return <React.Fragment>
            <Header />
            <MainPage  />
        </React.Fragment>;
    }
}

export default App;