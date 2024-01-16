import { useState, useEffect } from'react';
import CurrentLocation from '../components/CurrentLocation';
const useWeatherApi = () => {
   const [weather, setWeather] = useState(null);
   const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
   const apiKey = 'd2b6cbb301cc9b82439cc488b350ee22'
   const {location, loading, setLoading} = CurrentLocation();
    console.log(location);
   useEffect(() => {
    const fetchweather = async () => {
        setLoading(true);
       try{
        if(location){
        const res = await fetch(`${apiUrl}?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`)
        const data = await res.json();
        setWeather(data);
        setLoading(false);
        }
       }
       catch(error){
        console.log("Błąd:", error);
        setLoading(false);
       } 
    }
    fetchweather();
   },[location, apiKey, apiUrl]);
    return{weather, loading}
}
 
export default useWeatherApi;