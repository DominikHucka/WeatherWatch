import * as React from 'react';
import '../css/mainPage.css';
import SideBar from './sidebar';


interface MainPageProps {
    weatherData: any;
    // dailyData: any;
    weatherIcon: string;
}


const MainPage: React.FC<MainPageProps> = ({ weatherData, weatherIcon }) => {
    const temp = weatherData.main.temp;
    const maxTemp = weatherData.main.temp_max;
    const minTemp = weatherData.main.temp_min;
    const feelsLike = weatherData.main.feels_like;
    const [showOverlay, setShowOverlay] = React.useState(false);


    const kelvinToCelsius = (kelvin: number) => {
        return (kelvin - 273.15).toFixed();
    }


    const showSideBar = () => {
        setShowOverlay(true);
        console.log("its worked");

    }


    return (
        <div className='header'>
            <div className='first-section'>
                <div onClick={showSideBar} className='burger-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>{weatherData.name}</h1>
            </div>
            <div className='second-section'>
                <div className='second-section-data'>
                    <h1>{kelvinToCelsius(temp)} °</h1>
                    <h3> {weatherData.weather[0].description} </h3>
                    <div className='min-max-temprature'>
                        <span>max {kelvinToCelsius(maxTemp)} °</span>
                        <span>/</span>
                        <span>min {kelvinToCelsius(minTemp)} °</span>
                    </div>
                    <span>Gefühlt wie {kelvinToCelsius(feelsLike)} °</span>
                </div>
                <img className='weather-icon' src={weatherIcon} alt="" />
                {/* <img className='weather-icon' src={weatherData.weather[0].icon} alt="" /> */}
            </div>
            {showOverlay && <SideBar showSideBar={showSideBar} />}
        </div>
    )
}


export default MainPage;


