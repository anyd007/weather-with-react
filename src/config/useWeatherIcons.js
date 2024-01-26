import { useState, useEffect } from 'react';
import useWeatherApi from './useWeatherApi';
import RainIcon from '../assets/icons/rain.gif';
import SnowIcon from '../assets/icons/snow.gif';
import SunIcon from '../assets/icons/sun.gif';
import MoonIcon from '../assets/icons/moon.gif';
import CloudsIcon from '../assets/icons/clouds.gif';
import FewCloudsDIcon from '../assets/icons/few_clouds_d.gif';
import FewCloudsNIcon from '../assets/icons/few_clouds_n.gif';
import DizzleIcon from '../assets/icons/dizzle.gif';
import ThunderIcon from '../assets/icons/tunder.gif';


export const useWeatherIcons = (weather) => {

    const [weatherIcon, setWeatherIcon] = useState(null);

    useEffect(() => {
        if (weather) {
            const weatherId = weather.weather[0].id;
            const sunriseUTC = (weather.sys.sunrise + weather.timezone) * 1000;
            const sunsetUTC = (weather.sys.sunset + weather.timezone) * 1000;
            const currentCityTimeUTC = (weather.dt + weather.timezone) * 1000;

            // console.log("Current Time:", currentCityTimeUTC);
            // console.log("Sunrise:", sunriseUTC);
            // console.log("Sunset:", sunsetUTC);



            if (weatherId === 800 && (currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC)) {

                setWeatherIcon(MoonIcon)
            }
            else if ((weatherId === 801 || weatherId === 802) && (currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC)) {
                setWeatherIcon(FewCloudsNIcon);
            }

            else {

                if (weatherId >= 200 && weatherId < 300) {
                    setWeatherIcon(ThunderIcon);
                } else if (weatherId >= 300 && weatherId < 400) {
                    setWeatherIcon(DizzleIcon);
                } else if (weatherId >= 500 && weatherId < 600) {
                    setWeatherIcon(RainIcon);
                } else if (weatherId >= 600 && weatherId < 700) {
                    setWeatherIcon(SnowIcon);
                } else if (weatherId === 800) {
                    setWeatherIcon(SunIcon);
                } else if (weatherId === 801 || weatherId === 802) {
                    setWeatherIcon(FewCloudsDIcon);
                } else if (weatherId === 803 || weatherId === 804) {
                    setWeatherIcon(CloudsIcon);
                } else {
                    setWeatherIcon(null);
                }
            }
        }
    }, [weather])
    console.log(weather);
    return { weatherIcon };
}

export const useHourWeatherIcons = (fiveDay) => {
    const [weatherIcon, setWeatherIcon] = useState([]);
    useEffect(() => {
        if(fiveDay){
            const icons = fiveDay.list.map((icon,index) =>{
                let id =  icon.weather[0].id;
                if(id >= 200 && id < 300){
                    return ThunderIcon;
                }
                else if (id >= 300 && id < 400) {
                    return DizzleIcon;
                }
                else if (id >= 500 && id < 600) {
                    return RainIcon;
                }
                else if (id >= 600 && id < 700) {
                    return SnowIcon;
                }
                else if (id === 800) {
                    return SunIcon;
                }
                else if (id === 801 || id === 802) {
                    return FewCloudsDIcon;
                }
                else if (id === 803 || id === 804) {
                    return CloudsIcon;
                }
                else {
                    setWeatherIcon(null);
                }
                
            })
        setWeatherIcon(icons)
        }
    },[fiveDay])
    return {weatherIcon}
}


