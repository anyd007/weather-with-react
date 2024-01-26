import { useEffect, useState } from 'react';
import { useWeatherIcons } from '../config/useWeatherIcons';
import RainIcon from '../assets/icons/rain.gif';
import SnowIcon from '../assets/icons/snow.gif';

import '../styles/drops.scss';

const Drops = ({ weather }) => {
    const [drposDetails, setDrposDetails] = useState({ snow: 0, rain: 0 });
    const { weatherIcon } = useWeatherIcons(weather);
  
    useEffect(() => {
        const { rain, snow } = weather;
        if (snow) {
            setDrposDetails({
                ...drposDetails,
                snow: snow["1h"],
                rain: 0
            });
        }
        else if (rain) {
            setDrposDetails({
                ...drposDetails,
                snow: 0,
                rain: rain["1h"]
            });
        }
        else {
            setDrposDetails({
                ...drposDetails,
                snow: 0,
                rain: 0
            });
        }

    }, [weather])

    return (
        <div className="drops">
            {(drposDetails.snow > 0 || drposDetails.rain > 0) ?
                <div className="drops-detalis">
                    {drposDetails.snow > 0 &&
                        <div className="drops-item">
                            <img src={SnowIcon} alt="" />
                            <div className="last-drops">
                                <p className='last-drops__title'>ostatnia godzina:</p>
                                <p className='last-drops__value'>{drposDetails.snow} mm</p>
                            </div>
                            <img src={SnowIcon} alt="" />
                        </div>
                    }
                    {drposDetails.rain > 0 &&
                        <div className="drops-item">
                            <img src={RainIcon} alt="" />
                            <div className="last-drops">
                                <p className='last-drops__title'>ostatnia godzina:</p>
                                <p className='last-drops__value'>{drposDetails.rain} mm</p>
                            </div>
                            <img src={RainIcon} alt="" />
                        </div>
                    }
                </div>
                :
                <div className="drops-detalis">
                    <div className="drops-item">
                        <img src={weatherIcon} alt="" />
                        <div className="last-drops">
                            <p className='last-drops__title'>{weather.weather[0].description}</p>
                            <p className='last-drops__value'>{weather.clouds["all"]}%</p>
                        </div>
                        <img src={weatherIcon} alt="" />
                    </div>
                </div>
            }
        </div>
    );
}

export default Drops;