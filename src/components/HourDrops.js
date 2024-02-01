import { useState, useEffect } from "react";
import { useHourWeatherIcons } from "../config/useWeatherIcons";


import '../styles/hour-drop.scss'

const HourDrops = ({ fiveDay }) => {
    const [hourlyDrops, setHourlyDrops] = useState([]);
    const { weatherIcon, test } = useHourWeatherIcons(fiveDay);
    
    useEffect(() => {
        if (fiveDay) {
            const newHourlyDrops = fiveDay.list.map((item, index)=> {
                const date = new Date(item.dt_txt);
                return {
                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    day: date.toLocaleDateString([], { weekday: 'short' }),
                    month: date.toLocaleDateString([], { month: 'short' }),
                    rain: item.rain?.["3h"] || 0,
                    snow: item.snow?.["3h"] || 0,
                    noneDrops: !item.rain && !item.snow,
                    weatherIcon: weatherIcon[index],
                    clouds: item.clouds?.["all"] || 0
                };
            });

            setHourlyDrops(newHourlyDrops);
        }
    }, [fiveDay, weatherIcon]);
    
    return (
        <div className="hour-drops">
            {hourlyDrops && hourlyDrops.map((hour, index) => (
                <div className="hour-drops__item" key={index}>
                    <p>{hour.day}</p>
                    <p>ok. {hour.time}</p>
                    {hour.noneDrops ? (
                        <div className="hour-drops__item--info">
                             <img src={hour.weatherIcon} alt="" />
                             <p>chmury:</p>
                        <p>{hour.clouds}%</p>
                        </div>
                    ) : (
                        <>
                            {hour.rain > 0 && (
                                <div className="hour-drops__item--info">
                                    <img src={hour.weatherIcon} alt="" />
                                    <p>{hour.rain}</p>
                                    <p>mm</p>
                                </div>
                            )}
                            {hour.snow > 0 && (
                                <div className="hour-drops__item--info">
                                    <img src={hour.weatherIcon} alt="" />
                                    <p>{hour.snow}</p>
                                    <p>mm</p>
                                </div>
                            )}
                        </>
                    )
                    }
                </div>
            ))}
        </div>
    );
}


export default HourDrops;