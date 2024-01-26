import useGeoLoc from '../config/useGeoLoc';
import { useEffect, useState } from 'react';
import useWeatherApi from '../config/useWeatherApi';
import ReactLoading from 'react-loading';
import WeatherDetails from './WeatherDetails';
import ManualEntry from './Manual-entry';
const Weather = () => {
    
    const [requestedCity, setRequestedCity] = useState(null);
    const { location, geoError } = useGeoLoc();
    const { weather, fiveDay, apiError, setApiError, loading, setLoading } = useWeatherApi(location, requestedCity);
     
    useEffect(() => {
        if (geoError) {
            setLoading(false)
        }
    }, [geoError])

    return (
        <div className='weather-constainer'>
            {loading && <ReactLoading type="bubbles" color="#000000" height={100} width={100} />}
            {apiError && <h1>{apiError}</h1>}
            <h1>pogoda</h1>
            {!location &&
                <ManualEntry setRequestedCity={setRequestedCity} setApiError={setApiError} setLoading={setLoading}/>
            }
            {weather && location
                ?
                <h2>prognoza pogody dla twojej obecnej lokalizacji</h2>
                :
                <>
                    {requestedCity && !apiError && <h2>prognoza dla {requestedCity}</h2>}
                </>
            }
            {weather  && !apiError && <WeatherDetails weather={weather} fiveDay={fiveDay}/>}
        </div>
    )
}

export default Weather;