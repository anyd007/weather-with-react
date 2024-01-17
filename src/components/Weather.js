import useGeoLoc from '../config/useGeoLoc';
import { useEffect, useState } from 'react';
import useWeatherApi from '../config/useWeatherApi';
import ReactLoading from 'react-loading';
const Weather = () => {
    const [city, setCity] = useState('');
    const [requestedCity, setRequestedCity] = useState(null);
    const { location, geoError } = useGeoLoc();
    const { weather, apiError, setApiError, loading, setLoading } = useWeatherApi(location, requestedCity);
  useEffect(() => {
    if(geoError){
        setLoading(false)
        console.log(geoError);
  }
},[geoError])
    

    const handleClick = () => {
        setRequestedCity(city);
        setCity('');
        setApiError(null);
        setLoading(true);
    }
   
    return (
        <div className='weather-constainer'>
            {loading  && <ReactLoading type="bubbles" color="#000000" height={100} width={100} />}
            {apiError && <h1>{apiError}</h1>}

            {!location &&
                <div>
                    <input
                        type="text" placeholder="podaj nazwę miasta"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={handleClick}>zatwierdź</button>
                </div>
            }
            {weather && location ?
                <h2>prognoza pogody dla twojej obecnej lokalizacji</h2> :
                <>
                    {requestedCity && <h2>prognoza dla {requestedCity}</h2>}
                </>
            }
        </div>
    )
}

export default Weather;