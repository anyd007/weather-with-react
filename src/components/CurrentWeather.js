import useWeatherApi from "../config/useWeatherApi";

const CurrentWeather = () => {
    const {weather} = useWeatherApi();
    console.log(weather);
    return ( 
    <div className="currentWeather">
        <h1>currentWeather</h1>
       {weather &&
       <div className="weater-container">
         <h2>temperatura: {weather.main.temp}</h2> 
       <h2>odczuwalna: {weather.main.feels_like}</h2>
       <h2>zachmurzenie: {weather.main.humidity}%</h2>
       </div>
       
       }
    </div> 
    );
}
 
export default CurrentWeather;