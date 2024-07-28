import * as React from 'react';
import '../css/mainPage.css';


interface MainPageProps {
    currentWeather?: any;
}

interface MainPageState {

}


class MainPage extends React.Component<MainPageProps, MainPageState> {
    state = {}


    render() {
        const { currentWeather } = this.props


        return <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{currentWeather.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    }
}

export default MainPage;
