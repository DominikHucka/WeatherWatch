import * as React from 'react';
import '../css/mainPage.css';


interface MainPageProps {
    weatherData: any;
    // dailyData: any;
    weatherIcon: string;
}


const MainPage: React.FC<MainPageProps> = ({ weatherData, weatherIcon }) => {
    let temp = weatherData.main.temp;


    const kelvinToCalsius = (kelvin: number) => {
        return (kelvin - 273.15).toFixed();
    }


    return (
        <div className='header'>
            <div className='first-section'>
                <div className='burger-menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>{weatherData.name}</h1>
            </div>
            <div className='second-section'>
                <div>
                    <h1>{kelvinToCalsius(temp)} °</h1>
                    <h3> {weatherData.weather[0].description} </h3>
                    <span>{}</span>
                    <span>/</span>
                    <span></span>
                </div>
                <img className='weather-icon' src={weatherIcon} alt="" />
                {/* <img className='weather-icon' src={weatherData.weather[0].icon} alt="" /> */}
            </div>
        </div>
    )
}


export default MainPage;


