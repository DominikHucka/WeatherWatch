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
    

    componentDidMount(): void {
        if (this.props.currentWeather) {
            this.setState({ isLoading: false });
        }
    }


    componentDidUpdate(prevProps: Readonly<MainPageProps>, _prevState: Readonly<MainPageState>, _snapshot?: any): void {
        if (prevProps.currentWeather !== this.props.currentWeather) {
            this.setState({ isLoading: false });
        }
    }


    // showCurrentIcon = (icon: { [key: string]: string }, name: string) => {
    //     for (const key in icon) {
    //         if (key.toLowerCase() === name.toLowerCase()) {
    //             return icon[key];
    //         } else {
    //             console.error("ERROR");
    //             return "";
    //         }
    //     }
    //     return "";
    // }


    // showIcon = (_param: any) => {
    //     let name = this.props.currentWeather.weather[0].main;
    //     let icon = this.props.currentIcon.param;
    //     if (icon == name.toLowerCase()) {
    //         return icon
    //     }
    // }

    showIcon = (): string => {
        if (!this.props.currentWeather || !this.props.currentWeather.weather) return '';

        const weatherMain = this.props.currentWeather.weather[0]?.main.toLowerCase(); 
        const icon = this.props.currentIcon[weatherMain]; 

        if (icon) {
            return icon;
        }

        return ''; 
    }


    render() {
        if (this.state.isLoading || !this.props.currentWeather) {
            return <p>Loading...</p>; 
        }
        
        const main = this.props.currentWeather.weather[0].main;

        const iconSrc = this.showIcon();
      


        return <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
            {iconSrc ? (
                        <img src={iconSrc} style={{ width: "100px", height: "auto" }} alt={main} />
                    ) : (
                        <p>Icon not available</p>
                    )}
                <p>{main}</p>
                <h5 className="card-title">{this.props.currentWeather.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <img src="assets/image/thunder.png" alt="" />
            </div>
        </div>
    }
}

export default MainPage;
