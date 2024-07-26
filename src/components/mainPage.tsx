import * as React from 'react';


interface MainPageProps {
    weatherData: any;
}

interface MainPageState {
    
}


class MainPage extends React.Component<MainPageProps, MainPageState> {
    state = { }


    render() {
        const {weatherData} = this.props

    
        return <h2>{weatherData.name}</h2>
    }
}

export default MainPage;
