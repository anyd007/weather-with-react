import { useEffect, useState } from 'react';
import '../styles/time.scss';

const Time = ({ weather }) => {
    const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)
    const [sunriseTime, setSunriseTime] = useState(null)
    const [sunsetTime, setSunsetTime] = useState(null)

    console.log(weather);
    useEffect(() => {
        if (weather) {
            const currentDate = new Date()
            const hour = currentDate.getHours();
            const minute = currentDate.getMinutes();
            const filerHour = hour < 10 ? '0' + hour : hour;
            const filerMinute = minute < 10 ? '0' + minute : minute;
            setTime(`${filerHour}:${filerMinute}`)

            const day = currentDate.getDate()
            const year = currentDate.getFullYear()
            const month = currentDate.getMonth() + 1;
            const filterDay = day < 10 ? `0${day}` : day
            const filterMonth =  month < 10 ? `0${month}` : month;
            const dayIndex = currentDate.getDay()
            setDate(`${daysOfWeek[dayIndex]}, ${filterDay}/${filterMonth}/${year}`)
        }
    }, [weather])
    useEffect(() => {
        if (weather?.sys?.sunrise && weather?.sys?.sunset) {
            const sunrise = new Date((weather.sys.sunrise) * 1000);
            const hourSunrise = sunrise.getHours();
            const minuteSunrise = sunrise.getMinutes();
            setSunriseTime(`${hourSunrise < 10 ? '0' + hourSunrise : hourSunrise}:${minuteSunrise < 10 ? '0' + minuteSunrise : minuteSunrise}`);
            const sunset = new Date((weather.sys.sunset) * 1000);
            const hourSunset = sunset.getHours();
            const minuteSunset = sunset.getMinutes();
            setSunsetTime(`${hourSunset < 10? '0' + hourSunset : hourSunset}:${minuteSunset < 10? '0' + minuteSunset : minuteSunset}`);
        }
    }, [weather]);
    return (
        <div className="time">
            <h3>{time}</h3>
            <h3>{date}</h3>
            <h3>wschód / zachód : {sunriseTime} / {sunsetTime}</h3>
        </div>
    );
}

export default Time;