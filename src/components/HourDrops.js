import { useState, useEffect } from "react";
import RainIcon from '../assets/icons/rain.gif';
import SnowIcon from '../assets/icons/snow.gif';
import NoIcon from '../assets/icons/no.gif';
import Sun from '../assets/icons/sun.gif';
import Moon from '../assets/icons/moon.gif';
import Clouds from '../assets/icons/clouds.gif';
import FewCloudsD from '../assets/icons/few_clouds_d.gif';
import FewCloudsN from '../assets/icons/few_clouds_n.gif';
import Dizzle from '../assets/icons/dizzle.gif';
import Tunder from '../assets/icons/tunder.gif';
import '../styles/hour-drop.scss'

const HourDrops = ({ fiveDay }) => {
    const [hourlyDrops, setHourlyDrops] = useState([]);
    
    useEffect(() => {
        if (fiveDay) {
            const newHourlyDrops = fiveDay.list.map(item => {
                const date = new Date(item.dt_txt);
                return {
                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    day: date.toLocaleDateString([], { weekday: 'short' }),
                    month: date.toLocaleDateString([], { month: 'short' }),
                    rain: item.rain?.["3h"] || 0,
                    snow: item.snow?.["3h"] || 0,
                    noneDrops: !item.rain && !item.snow
                };
            });

            setHourlyDrops(newHourlyDrops);
        }
    }, [fiveDay]);


    return (
        <div className="hour-drops">
            {hourlyDrops && hourlyDrops.map((hour, index) => (
                <div className="hour-drops__item" key={index}>
                    <p>{hour.day}</p>
                    <p>{hour.time}</p>
                    {hour.noneDrops ? (
                        <div className="hour-drops__item--info">
                             <img src={NoIcon} alt="" />
                        <p>brak</p>
                        </div>
                    ) : (
                        <>
                            {hour.rain > 0 && (
                                <div className="hour-drops__item--info">
                                    <img src={RainIcon} alt="" />
                                    <p>{hour.rain}mm</p>
                                </div>
                            )}
                            {hour.snow > 0 && (
                                <div className="hour-drops__item--info">
                                    <img src={SnowIcon} alt="" />
                                    <p>{hour.snow}mm</p>
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