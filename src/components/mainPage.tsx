import * as React from 'react';
import '../css/mainPage.css';


interface MainPageProps {
    currentWeather?: any;
    icon: { [key: string]: string };
}

interface MainPageState {

}


class MainPage extends React.Component<MainPageProps, MainPageState> {
    state = {}


    render() {
        const { currentWeather, icon } = this.props

        if (!currentWeather) {
            return <div>Loading...</div>;
        }

        return <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <img src={icon.Rain} alt="" />
                {/* <span>{currentWeather.weahter[0].icon}</span> */}
                {/* <img src={currentWeather.weahter[0].icon} alt="" /> */}
                <p>{currentWeather.weather[0].description}</p>
                <h5 className="card-title">{currentWeather.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    }
}

export default MainPage;
