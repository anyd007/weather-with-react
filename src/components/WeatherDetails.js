import HourWeather from './HourWeather';
import Temp from './Temp';
import Windy from './Windy';
import Drops from './Drops';

const WeatherDetails = ({ weather, fiveDay }) => {
 
return (
    <div className="weather-details">
      {weather && <Temp weather={weather} fiveDay={fiveDay}/>}
      {fiveDay && <HourWeather fiveDay={fiveDay}/>}
      {weather && <Windy weather={weather}/>}
      {weather && <Drops weather={weather}/>}
      </div>
    );
}

export default WeatherDetails;