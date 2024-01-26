import { useEffect, useState } from "react";
import '../styles/temp.scss';

const Temp = ({ weather }) => {
    const [tempHeight, setTempHeight] = useState(0);
    const [realFellTemperature, setRealFellTemperature] = useState(0);
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState(1); // domyślny czas trwania

    useEffect(() => {
        // Ustawianie dynamicznej wysokości dla animacji transition
        setTimeout(() => {
            setTempHeight((weather.main.temp + 40) / 80 * 100);
            setRealFellTemperature((weather.main.feels_like + 40) / 80 * 100)
            setTempMin((weather.main.temp_min + 40) / 80 * 100)
            setTempMax((weather.main.temp_max + 40) / 80 * 100)

            // Ustawianie dynamicznego czasu trwania animacji transition
            setTransitionDuration(2); // Możesz dostosować to do swoich potrzeb
        }, 500)
        
    }, [weather]);

    const currentTemp = {
        height: `${tempHeight}%`,
        transition: `all ${transitionDuration}s ease`,
    };
    const realFeels = {
        height: `${realFellTemperature}%`,
        transition: `all ${transitionDuration}s ease`,
    }
    const minTemp = {
        height: `${tempMin}%`,
        transition: `all ${transitionDuration}s ease`,
    }
    const maxTemp = {
        height: `${tempMax}%`,
        transition: `all ${transitionDuration}s ease`,
    }
   
    return (
        <div className="temp">
            {weather &&
                <div className="temp-container">
                    <div className="temp-item">
                        <h3>obecna</h3>
                        <div className="temp-animation">
                            <div className={`temp-scale ${weather.main.temp <= 0 ? 'cold' : ''}`} style={currentTemp}></div>
                            {/* <div className="temp-end"></div> */}
                        </div>
                        <h2 className={weather.main.temp <= 0 ? 'cold' : 'worm'}>{weather.main.temp}&deg;C</h2>
                    </div>
                    <div className="temp-item">
                        <h3>odczucie</h3>
                        <div className="temp-animation">
                            <div className={`temp-scale ${weather.main.feels_like <= 0 ? 'cold' : ''}`} style={realFeels}></div>
                            {/* <div className="temp-end"></div> */}
                        </div>
                        <h2 className={weather.main.feels_like <= 0 ? 'cold' : 'worm'}>{weather.main.feels_like}&deg;C</h2>
                    </div>
                    <div className="temp-item">
                        <h3>min</h3>
                        <div className="temp-animation">
                            <div className={`temp-scale ${weather.main.temp_min <= 0 ? 'cold' : ''}`} style={minTemp}></div>
                            {/* <div className="temp-end"></div> */}
                        </div>
                        <h2 className={weather.main.temp_min <= 0 ? 'cold' : 'worm'}>{weather.main.temp_min}&deg;C</h2>
                    </div>
                    <div className="temp-item">
                        <h3>max</h3>
                        <div className="temp-animation">
                            <div className={`temp-scale ${weather.main.temp_max <= 0 ? 'cold' : ''}`} style={maxTemp}></div>
                            {/* <div className="temp-end"></div> */}
                        </div>
                        <h2 className={weather.main.temp_max <= 0 ? 'cold' : 'worm'}>{weather.main.temp_max}&deg;C</h2>
                    </div>
                </div>
            }
        </div>
    );
  
}

export default Temp;