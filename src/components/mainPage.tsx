import * as React from 'react';
import '../css/mainPage.css';
import SideBar from './sidebar';
import DataCard from './dataCard';
import ForecastCard from './forecastCard';

interface MainPageProps {
    weatherData: any;
    weatherDaily: any;
    weatherIcon: string;
    getAnimation: () => boolean;
}


const MainPage: React.FC<MainPageProps> = ({ weatherData, weatherIcon, getAnimation }) => {
    let head = React.useRef<HTMLDivElement>(null);
    // const [toggle, getToggle] = React.useState(false);
    const temp = weatherData.main.temp;
    const maxTemp = weatherData.main.temp_max;
    const minTemp = weatherData.main.temp_min;
    const feelsLike = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;
    const pressure = weatherData.main.pressure;
    // const sea = weatherData.main.sea_level;
    const windSpeed = weatherData.wind.speed;
    // const coordinations = weatherData.cord.lat + weatherData.cord.lon;
    // const coordinationsLon = weatherData.cord.lon;
    // const [animated, setAnimate] = React.useState(true);


    // const kelvinToCelsius = (kelvin: number) => {
    //     return (kelvin - 273.15).toFixed();
    // }


    const kilometerPerHour = (hour: number) => {
        return (hour * 3.6).toFixed();
    }


    const showSideBar = (): any => {
        setTimeout(() => {
            getAnimation();
        }, 100);
    }


    return (
        <div ref={head} className='header'>
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
                    {/* <h1>{kelvinToCelsius(temp)} °</h1> */}
                    <h1>{temp.toFixed()} °</h1>
                    <h3> {weatherData.weather[0].description} </h3>
                    <div className='min-max-temprature'>
                        {/* <span>max {kelvinToCelsius(maxTemp)} °</span> */}
                        <span>max {maxTemp.toFixed()} °</span>
                        <span>/</span>
                        {/* <span>min {kelvinToCelsius(minTemp)} °</span> */}
                        <span>min {minTemp.toFixed()} °</span>
                    </div>
                    {/* <span>Gefühlt wie {kelvinToCelsius(feelsLike)} °</span> */}
                    <span>Gefühlt wie {feelsLike.toFixed()} °</span>
                </div>
                <img className='weather-icon' src={weatherIcon} alt="" />
                {/* <img className='weather-icon' src={weatherData.weather[0].icon} alt="" /> */}
            </div>
            <SideBar showSideBar={showSideBar} />
            <ForecastCard />
            <div className='cards'>
                <div className='cards-column'>
                    <DataCard title={'Feuchtigkeit'} value={humidity + '%'} img={'humidity.png'} />
                    <DataCard title={'Luftdruck'} value={pressure + 'mbar'} img={'pressure.png'} />
                </div>
                <div className='cards-column'>
                    <DataCard title={'Wind'} value={kilometerPerHour(windSpeed) + 'km/h'} img={'wind.png'} />
                    <DataCard title={'Temperatur'} value={temp.toFixed() + '°'} img={'temperature.png'} />
                </div>
            </div>
        </div>                                                                                                
    )
}


export default MainPage;


