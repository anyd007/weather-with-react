import { useState, useEffect } from "react";
import '../styles/hours-weather.scss';

const HourWeather = ({ fiveDay }) => {
    const [hoursWeather, setHoursWeather] = useState([]);




    useEffect(() => {
        if (fiveDay) {
            const newHourWeather = fiveDay.list.map((el, index) =>{
                const date = new Date(el.dt_txt);
                return {
                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    day: date.toLocaleDateString([], { weekday:'short' }),
                    month: date.toLocaleDateString([], { month:'short' }),
                    temp: el.main.temp
                }
            })
          
            setHoursWeather(newHourWeather);
        }
    }, [fiveDay])
   
   
    return (
        <div className="hours">
            {hoursWeather && hoursWeather.map((hour, index) => (
                <div className="hours-items" key={index}>
                    <p>{hour.day}</p>
                    <p>{hour.time}</p>
                    <p className={hour.temp <= 0 ? 'cold' : 'worm'}>{hour.temp}&deg;C</p>
                </div>
            ))}
        </div>
    );
}

export default HourWeather;