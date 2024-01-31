import useGeoLoc from '../config/useGeoLoc';
import { useEffect, useState } from 'react';
import useWeatherApi from '../config/useWeatherApi';
import ReactLoading from 'react-loading';
import WeatherDetails from './WeatherDetails';
import ManualEntry from './Manual-entry';
import Time from './Time';
import '../styles/weather.scss';
const Weather = () => {
    
    const [requestedCity, setRequestedCity] = useState(null);
    const [background, setBackground] = useState(null);
    const { location, geoError } = useGeoLoc();
    const { weather, fiveDay, pollution, apiError, setApiError, loading, setLoading } = useWeatherApi(location, requestedCity);
     
    useEffect(() => {
        if (geoError) {
            setLoading(false)
        }
    }, [geoError])

    useEffect(()=>{

        if (weather) {
            const sunriseUTC = (weather.sys.sunrise + weather.timezone) * 1000;
            const sunsetUTC = (weather.sys.sunset + weather.timezone) * 1000;
            const currentCityTimeUTC = (weather.dt + weather.timezone) * 1000;

            if (currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC) {
                setBackground({
                    
                    background: 'linear-gradient(to right, #614385, #516395)'
                })
                
            }
            else  {
                setBackground({
                    background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)'
                })
            }
        }

    }, [weather])

    return (
        <div className='weather-constainer' style={background}>
            {loading && <ReactLoading type="bubbles" color="#000000" height={100} width={100} />}
            {apiError && <h1>{apiError}</h1>}
            <h1>pogoda</h1>
            {!location &&
                <ManualEntry setRequestedCity={setRequestedCity} setApiError={setApiError} setLoading={setLoading}/>
            }
            {weather && location
                ?
                <Time weather={weather} />
                :
                <>
                    {requestedCity && !apiError && <h2>prognoza dla {requestedCity}</h2>}
                </>
            }
            {weather  && !apiError && <WeatherDetails weather={weather} fiveDay={fiveDay} pollution={pollution}/>}
        </div>
    )
}

export default Weather;