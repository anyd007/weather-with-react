import { useEffect, useState } from 'react';
import RainIcon from '../assets/icons/rain.gif';
import SnowIcon from '../assets/icons/snow.gif';
import '../styles/drops.scss';

const Drops = ({ weather }) => {
    const [drposDetails, setDrposDetails] = useState({ snow: 0, rain: 0 });

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
                        <img src={RainIcon} alt="" />
                        <div className="last-drops">
                            <p className='last-drops__title'>ostatnia godzina:</p>
                            <p className='last-drops__value'>brak opadów</p>
                        </div>
                        <img src={SnowIcon} alt="" />
                    </div>
                </div>
            }
        </div>
    );
}

export default Drops;