import { useState, useEffect } from "react";
import '../styles/hours-weather.scss';

const HourWeather = ({ fiveDay }) => {
    const [hoursWeather, setHoursWeather] = useState(null);




    useEffect(() => {
        if (fiveDay) {
            const { list } = fiveDay;
            setHoursWeather(list);
        }
    }, [fiveDay])
 
   
    return (
        <div className="hours">
            {hoursWeather && hoursWeather.map((hour, index) => (
                <div className="hours-items" key={index}>
                    <p>{hour.dt_txt.slice(5, -3)}</p>
                    <p className={hour.main.temp <= 0 ? 'cold' : 'worm'}>{hour.main.temp}&deg;C</p>
                </div>
            ))}
        </div>
    );
}

export default HourWeather;