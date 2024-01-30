import { useEffect, useState } from 'react';
import '../styles/time.scss';

const Time = ({ weather }) => {
    const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)

    console.log(weather);
    useEffect(() => {
        if (weather) {
            const currentDate = new Date()
            const hour = currentDate.getHours();
            const minute = currentDate.getMinutes();
            const filerHour = hour < 10 ? '0' + hour : hour;
            const filerMinute = minute < 10 ? '0' + minute : minute;
            setTime(`${filerHour}:${filerMinute}`)

            const year = currentDate.getFullYear()
            const month = currentDate.getMonth() + 1;
            const filterMonth =  month < 10 ? `0${month}` : month;
            const dayIndex = currentDate.getDay()
            setDate(`${daysOfWeek[dayIndex]}, ${filterMonth}, ${year}`)
        }
    }, [weather])
    return (
        <div className="time">
            <h2>{time}</h2>
            <h3>{date}</h3>
        </div>
    );
}

export default Time;