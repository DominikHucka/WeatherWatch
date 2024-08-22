import * as React from 'react';
import '../css/mainPage.css';

interface MainPageProps {
    currentWeather: any;
    currentIcon: { [key: string]: string };
}

interface MainPageState {
    isLoading: boolean;
}



class MainPage extends React.Component<MainPageProps, MainPageState> {
    state = {
        isLoading: true,
    }
    // weather = this.props.currentWeather;
    // weatherMain = this.props.currentWeather.weather[0].main;


    componentDidMount(): void {
        if (this.props.currentWeather && this.props.currentWeather.name) {
            this.setState({ isLoading: false });
        }
    }


    componentDidUpdate(prevProps: Readonly<MainPageProps>, prevState: Readonly<MainPageState>, snapshot?: any): void {
        if (prevProps.currentWeather !== this.props.currentWeather && this.props.currentWeather.name) {
            this.setState({ isLoading: false });
        }
    }


    showCurrentIcon = (icon: { [key: string]: string }, name: string) => {
        for (const key in icon) {
            if (key.toLowerCase() === name.toLowerCase()) {
                return icon[key];
            } else {
                console.error("ERROR");
                return "";
            }
        }
        return "";
    }


    render() {
        if (this.state.isLoading || !this.props.currentWeather || !this.props.currentWeather.name) {
            return <p>Loading...</p>; 
        }
        // if (!this.weather || !this.weatherMain) {
        //     return <p>Loading...</p>; 
        // }
        const main = this.props.currentWeather.weather[0].main;
        // console.log("show name", main);
        // const { currentIcon } = this.props;
        // console.log(this.weatherMain)
        // let name = this.props.currentWeather.weather[0].main;
        // console.log(name);

        const srcIcon = this.showCurrentIcon(this.props.currentIcon, main);
        // console.log("show icon", srcIcon);
        // if(!this.weather) {
        //     <p>Loading...</p>
        // }



        return <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                {/* <img src={this.props.currentIcon.Clouds} style={{ width: "100px", height: "auto" }} alt="" /> */}
                <img src={srcIcon} style={{ width: "100px", height: "auto" }} alt="" />
                {/* <p>{name}</p> */}
                {/* <p>{this.weatherMain}</p> */}
                <h5 className="card-title">{this.props.currentWeather.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <img src="assets/image/thunder.png" alt="" />
            </div>
        </div>
    }
}

export default MainPage;
