import Temp from './Temp';

const WeatherDetails = ({ weather, fiveDay }) => {

return (
    <div className="weather-details">
      {weather && <Temp weather={weather} fiveDay={fiveDay}/>}
      </div>
    );
}

export default WeatherDetails;