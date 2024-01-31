import { useState, useEffect, useRef } from "react";
import '../styles/pressuer.scss';
import PressuerIcon from '../assets/icons/pressure.gif';


const Pressure = ({ weather }) => {
    const [pressure, setPressure] = useState(0)
    const [pressureWidth, setPressureWidth] = useState(0)
    const minPressure = 900;
    const maxPressure = 1070;
    const [transitionDuration, setTransitionDuration] = useState(1);
    const pressureRef = useRef(null)

    useEffect(() => {
        if (weather) {
            setPressure(weather.main.pressure)

        }
    }, [weather])

    useEffect(() => {
        const haldleScroll = () => {
            const pressureElelemt = pressureRef.current
            if (pressureElelemt) {
                const elementPossitions = pressureElelemt.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight

                if (elementPossitions.top < windowHeight) {
                    setPressureWidth(((pressure - minPressure) / (maxPressure - minPressure)) * 100);

                }
            }
        }
        window.addEventListener("scroll", haldleScroll)

        return () => window.removeEventListener("scroll", haldleScroll)

    }, [pressure, pressureRef, minPressure, maxPressure])

    const pressureDisplay = {
        width: `${pressureWidth}%`,
        transition: `all ${transitionDuration}s ease`,
    }
    return (
        <div className="pressure" ref={pressureRef}>
            <div className="pressure-container">
                <div className="pressure-item">
                    <div className="pressure-animation">
                        <div className={`pressure-scale ${pressure < 1000 || pressure > 1020 ? 'low' : ''}`} style={pressureDisplay}></div>
                    </div>
                    <div className="pressure-info">
                        <p>{pressure}</p>
                        <p>hPa</p>
                    </div>
                </div>
                <div className="min-max-values">
                    <p className="pressure-values min">{minPressure}hPa</p>
                    <p className="pressure-values max">{maxPressure}hPa</p>
                </div>
            </div>
        </div>
    );
}

export default Pressure;