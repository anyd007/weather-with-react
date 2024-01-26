 import { useState, useEffect } from'react';
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
        
            useEffect(() =>{
                if(weather){
                    const weatherId = weather.weather[0].id;
                    const sunrise = new Date(weather.sys.sunrise * 1000)
                    const sunset = new Date(weather.sys.sunset * 1000)

                    const refreshInterval = setInterval(()=>{
                          const now = new Date()
                    
                    if(now > sunrise && now < sunset){
                        if(weatherId === 800){
                            setWeatherIcon(MoonIcon)
                        }
                    }
                    }, 60000)
                  

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

                return () => clearInterval(refreshInterval);
            }
            }, [weather])
 
    return {weatherIcon};
}
 
