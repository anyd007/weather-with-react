import { useState, useEffect } from "react";
import '../styles/pressuer.scss';
import PressuerIcon from '../assets/icons/pressure.gif';


const Pressure = ({ weather }) => {
    const [pressure, setPressure] = useState(0)
    const [pressureWidth, setPressureWidth] = useState(0)
    const minPressure = 900;
    const maxPressure = 1100;
    const [transitionDuration, setTransitionDuration] = useState(1); // domyślny czas trwania
    useEffect(() => {
        if (weather) {
            setPressure(weather.main.pressure)

            setTimeout(() => {
                setPressureWidth(((pressure - minPressure) / (maxPressure - minPressure)) * 100);

            }, 1000)

        }
    }, [weather, pressure])

    const pressureDisplay = {
        width: `${pressureWidth}%`,
        transition: `all ${transitionDuration}s ease`,
    }
    return (
        <div className="pressure">
            <div className="pressure-container">
                <img src={PressuerIcon} alt="" />
                <div className="pressure-item">
                    <div className="pressure-animation">
                        <div className="pressure-scale" style={pressureDisplay}></div>
                    </div>
                </div>
                <img src={PressuerIcon} alt='' />
            </div>
        </div>
    );
}

export default Pressure;