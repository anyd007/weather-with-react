import { useState, useEffect } from "react";

const useWeatherApi = (location, requestedCity) => {
    const [weather, setWeather] = useState(null);
    const [fiveDay, setFiveDay] = useState(null);
    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            const apiId = 'd2b6cbb301cc9b82439cc488b350ee22';

            try {
                if (requestedCity) {
                    const [response, fiveDaysResponse] = await Promise.all([
                        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${requestedCity}&appid=${apiId}&units=metric`),
                        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${requestedCity}&appid=${apiId}&units=metric`)
                    ]);

                    if (response.ok) {
                        const data = await response.json();
                        setWeather(data);
                    }

                    if (fiveDaysResponse.ok) {
                        const data = await fiveDaysResponse.json();
                        setFiveDay(data);
                    } else {
                        setFiveDay(null);
                        setApiError("Nie udało się odczytać danych dla podanej lokalizacji");
                    }

                    setLoading(false);
                }

                if (location) {
                    const [response, fiveDaysResponse] = await Promise.all([
                        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiId}&units=metric`),
                        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=${apiId}&units=metric`)
                    ]);

                    if (response.ok) {
                        const data = await response.json();
                        setWeather(data);
                    }

                    if (fiveDaysResponse.ok) {
                        const data = await fiveDaysResponse.json();
                        setFiveDay(data);
                    } else {
                        setFiveDay(null);
                    }

                    setLoading(false);
                }
            } catch (error) {
                console.error("Error during API request:", error);
                setApiError(error);
                setLoading(false);
            }
        };

        fetchWeather();

        const intervalId = setInterval(fetchWeather, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, [location, requestedCity]);

    return { weather, fiveDay, apiError, loading, setLoading, setApiError };
};

export default useWeatherApi;
