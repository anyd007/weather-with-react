import { useState, useEffect } from "react";


const useWeatherApi = (location, requestedCity) => {

    const [weather, setWeather] = useState(null);
    const [fiveDay, setFiveDay] = useState(null);
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
                    else {
                        //setApiError({message: `Błąd: ${response.status} - ${response.statusText}`});
                        if (response.status === 404) {
                            setApiError("Niestety, nie znaleziono żadnego miasta.");
                            setLoading(false);
                        }

                    }
                }
                if (location) {
                    const fiveDaysResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=${apiId}&units=metric`)
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiId}&units=metric`);
                    if (response.ok) {
                        const data = await response.json();
                        setWeather(data);
                        setLoading(false);
                    }
                    if(fiveDaysResponse.ok) {
                        const data = await fiveDaysResponse.json();
                        setFiveDay(data);
                        setLoading(false);
                    }
                    else {
                        setApiError({ message: `Błąd: ${response.status} - ${response.statusText}` });
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

        const intervalId = setInterval(fechWeather, 60000);
        return () => clearInterval(intervalId);

    }, [location, requestedCity]);

    return { weather, fiveDay, apiError, setApiError, loading, setLoading };
}

export default useWeatherApi;