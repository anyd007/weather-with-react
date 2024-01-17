import { useState, useEffect } from "react";


const useWeatherApi = (location, requestedCity) => {

    const [weather, setWeather] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fechWeather = async () => {
            const apiId = 'd2b6cbb301cc9b82439cc488b350ee22'
            try {
                if (requestedCity) {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${apiId}&units=metric`);
                    if (response.ok) {
                        const data = await response.json();
                        setWeather(data);
                        setLoading(false);
                    }
                    else{
                        //setApiError({message: `Błąd: ${response.status} - ${response.statusText}`});
                        if(response.status === 404){
                            setApiError("Niestety, nie znaleziono żadnego miasta.");
                            setLoading(false);
                        }
                        
                    }
                }
                if (location) {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiId}&units=metric`);
                    if(response.ok) {
                    const data = await response.json();
                    setWeather(data);
                    setLoading(false);
                    }
                    else{
                        setApiError({message: `Błąd: ${response.status} - ${response.statusText}`});
                        setLoading(false);
                    }
                }
            }
            catch (error) {
                console.log(error);
                setApiError(error);
                setLoading(false);
            }
        }
        fechWeather();
    }, [location, requestedCity]);

    return { weather, apiError, setApiError, loading, setLoading };
}

export default useWeatherApi;