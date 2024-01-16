import useWeatherApi from "../config/useWeatherApi";
import ReactLoading from 'react-loading';

const CurrentWeather = () => {
    const {weather, loading} = useWeatherApi();
    console.log(weather);
    return ( 
    <div className="currentWeather">
       {loading && <ReactLoading type="bubbles" color="#ff4234" height={100} width={100} /> }
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