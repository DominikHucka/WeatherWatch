import * as React from 'react';
import Header from './components/header';


interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
    state = {}
    apiKey = process.env.REACT_APP_API;
    

    componentDidMount = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=reutlingen&appid=${this.apiKey}`)
        .then(res => res.json())
        .then(data => console.log('show data', data))
        .catch(error => console.error('Fetching Failed', error));
    //     const fetchData = async () => {
    //         let url = (`https://api.openweathermap.org/data/2.5/weather?q=reutlingen&appid=${this.apiKey}`);
    //         let res = await fetch(url);
    //         let data = await res.json();
    //         console.log('show me data of current weather', data);
    //     }
    //   fetchData();
    }

    render() {

        return <React.Fragment>
            <Header></Header>
        </React.Fragment>;
    }
}

export default App;