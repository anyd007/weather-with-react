import { useState, useEffect } from 'react';
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
            const id = weather.weather[0].id;
            const sunriseUTC = (weather.sys.sunrise + weather.timezone) * 1000;
            const sunsetUTC = (weather.sys.sunset + weather.timezone) * 1000;
            const currentCityTimeUTC = (weather.dt + weather.timezone) * 1000;

            // console.log("Current Time:", currentCityTimeUTC);
            // console.log("Sunrise:", sunriseUTC);
            // console.log("Sunset:", sunsetUTC);



            if (id === 800 && (currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC)) {

                setWeatherIcon(MoonIcon)
            }
            else if ((id === 801 || id === 802) && (currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC)) {
                setWeatherIcon(FewCloudsNIcon);
            }

            else {

                if (id >= 200 && id < 300) {
                    setWeatherIcon(ThunderIcon);
                } else if (id >= 300 && id < 400) {
                    setWeatherIcon(DizzleIcon);
                } else if (id >= 500 && id < 600) {
                    setWeatherIcon(RainIcon);
                } else if (id >= 600 && id < 700) {
                    setWeatherIcon(SnowIcon);
                } else if (id === 800) {
                    setWeatherIcon(SunIcon);
                } else if (id === 801 || id === 802) {
                    setWeatherIcon(FewCloudsDIcon);
                } else if (id === 803 || id === 804) {
                    setWeatherIcon(CloudsIcon);
                } else {
                    setWeatherIcon("N/A");
                }
            }
        }
    }, [weather])

    return { weatherIcon };
}

export const useHourWeatherIcons = (fiveDay) => {
    const [weatherIcon, setWeatherIcon] = useState([]);
    const [ dayTimes, setDayTimes] = useState([]);
    

    useEffect(() => {
        if (fiveDay) {
         
            const icons = fiveDay.list.map((icon, index) => {
                let id = icon.weather[0].id;
                const sunriseUTC = (fiveDay.city.sunrise + fiveDay.city.timezone) * 1000;
                const sunsetUTC = (fiveDay.city.sunset + fiveDay.city.timezone) * 1000;
                const currentCityTimeUTC = (fiveDay.list[index].dt + fiveDay.city.timezone) * 1000;
             
                // console.log("currentCityTimeUTC:",  new Date(currentCityTimeUTC).toLocaleDateString([], {hour: '2-digit', minute: '2-digit' }));
                // console.log("sunriseUTC:",  new Date(sunriseUTC).toLocaleDateString([], {hour: '2-digit', minute: '2-digit'}));
                // console.log("sunsetUTC:",  new Date(sunsetUTC).toLocaleDateString([], { hour: '2-digit', minute: '2-digit'}));
                // console.log(fiveDay.city);
                if (id === 800 && (currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC)) {
                    return MoonIcon
                } else if ((currentCityTimeUTC < sunriseUTC || currentCityTimeUTC > sunsetUTC) && (id === 801 || id === 802) ) {
                    return FewCloudsNIcon;
                } 
               else if (id >= 200 && id < 300) {
                    return ThunderIcon;
                } else if (id >= 300 && id < 400) {
                    return DizzleIcon;
                } else if (id >= 500 && id < 600) {
                    return RainIcon;
                } else if (id >= 600 && id < 700) {
                    return SnowIcon;
                } else if (id === 800) {
                    return SunIcon;
                } else if (id === 801 || id === 802) {
                    return FewCloudsDIcon;
                } else if (id === 803 || id === 804) {
                    return CloudsIcon;
                } else {
                    return "N/A";
                }
            
            });

            setWeatherIcon(icons);
        }
    }, [fiveDay]);

    return { weatherIcon};
};



