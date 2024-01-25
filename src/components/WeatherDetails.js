import HourWeather from './HourWeather';
import Temp from './Temp';
import Windy from './Windy';
import Drops from './Drops';
import HourDrops from './HourDrops';
import '../styles/weather-details.scss';

const WeatherDetails = ({ weather, fiveDay }) => {
 
return (
    <div className="weather-details">
      {weather && <Temp weather={weather} fiveDay={fiveDay}/>}
      {fiveDay && <HourWeather fiveDay={fiveDay}/>}
      {weather && <Drops weather={weather}/>}
      {fiveDay && <HourDrops fiveDay={fiveDay}/>}
      {weather && <Windy weather={weather}/>}
      
      </div>
    );
}

export default WeatherDetails;