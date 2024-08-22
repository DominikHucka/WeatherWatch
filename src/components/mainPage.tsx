import * as React from 'react';
import '../css/mainPage.css';

interface MainPageProps {
    currentWeather: any;
    currentIcon: { [key: string]: string };
}

interface MainPageState {
    name: string | undefined;
}



class MainPage extends React.Component<MainPageProps, MainPageState> {
    state = {
        name: undefined,
    }
    weather = this.props.currentWeather;
    // weatherMain = this.props.currentWeather.weather[0].main;
    


    showCurrentIcon = (icon: { [key: string]: string }, name: string) => {
        for (const key in icon) {
            if (key.toLowerCase() === name.toLowerCase()) {
                return icon[key];
            } else {
                return console.error("ERROR");
            }
        }
        return "";
    }


    render() {
        // const main = this.weather.weather[0].main;
        // console.log("show name", main);
        // const { currentIcon } = this.props;
        // console.log(this.weatherMain)
        // let name = this.props.currentWeather.weather[0].main;
        // console.log(name);

        // const srcIcon = this.showCurrentIcon(this.props.currentIcon, main);
        // console.log("show icon", srcIcon);
        if(!this.weather) {
            <p>Loading...</p>
        }



        return <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                {/* <img src= {this.props.currentIcon.Clouds} style={{ width: "100px", height: "auto" }} alt="" /> */}
                {/* <img src={srcIcon} style={{ width: "100px", height: "auto" }} alt="" /> */}
                {/* <p>{name}</p> */}
                {/* <p>{main}</p> */}
                <h5 className="card-title">{this.weather.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <img src="assets/image/thunder.png" alt="" />
            </div>
        </div>
    }
}

export default MainPage;
