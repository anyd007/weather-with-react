import { useState, useEffect } from "react";
import wind from '../assets/icons/wind.gif'
import '../styles/windy.scss'


const Windy = ({ weather }) => {

    const [windDetails, setWindDetails] = useState(0);
    useEffect(() => {

        if (weather) {
            const { wind } = weather;
            setWindDetails(wind);
        }

    }, [weather])
   
    return (
        <div className="windy">
            {weather &&
                <div className="windy-dealis">
                    <div className="icon">
                        <img src={wind} alt="" />
                    </div>
                    <div className="windy-info">
                        <div className="wind-speed">
                            <p className="wind-speed__title">Prędkość:</p>
                            <p className="wind-speed__value">{(windDetails.speed * 3.6).toFixed(2)} km/h</p>
                        </div>
                        {windDetails.gust && <div className="wind-speed">
                            <p className="wind-speed__title">W porywach:</p>
                            <p className="wind-speed__value"> {(windDetails.gust * 3.6).toFixed(2)} km/h</p>
                        </div>
                        }
                    </div>
                    <div className="icon">
                        <img src={wind} alt="" />
                    </div>
                </div>
            }
        </div>
    );
}

export default Windy;
