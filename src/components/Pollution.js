import { useEffect, useState } from "react";
import '../styles/pollution.scss';

const Pollution = ({pollution}) => {
    const [pollutionInfo, setPollutionInfo] = useState('')
    const [textStyle, setTextStyle] = useState(null)
 
    useEffect(() =>{
        if(pollution && pollution.list){
            const pollutionIndex = pollution.list[0].main['aqi']
            if(pollutionIndex){
                if(pollutionIndex === 1){
                    setPollutionInfo('Dobra')
                    setTextStyle({
                        color:'#008000'
                    })
                }
                else if(pollutionIndex === 2){
                    setPollutionInfo('umiarokowana')
                    setTextStyle({
                        color:'#a4c639'
                    })
                }
                else if(pollutionIndex === 3){
                    setPollutionInfo('średnio-umiarkowana')
                    setTextStyle({
                        color:'#bdb76b'
                    })
                }
                else if(pollutionIndex === 4){
                    setPollutionInfo('słaba')
                    setTextStyle({
                        color:'#ff6347'
                    })
                }
                else if(pollutionIndex === 5){
                    setPollutionInfo('zła')
                    setTextStyle({
                        color:'#ff4500'
                    })
                }
            }
        }
    },[pollution])
    
    return ( 
        <div className="pollution">
            <h2>jakość powietrza:</h2>
            <h2 style={textStyle}>{pollutionInfo}</h2>
        </div>
     );
}
 
export default Pollution;