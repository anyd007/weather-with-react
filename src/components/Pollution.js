import { useEffect, useState } from "react";

const Pollution = ({pollution}) => {
    const [pollutionInfo, setPollutionInfo] = useState('')

    useEffect(() =>{
        if(pollution && pollution.list){
            const pollutionIndex = pollution.list[0].main['aqi']
            if(pollutionIndex){
                if(pollutionIndex === 1){
                    setPollutionInfo('Dobra')
                }
                else if(pollutionIndex === 2){
                    setPollutionInfo('umiarokowana')
                }
                else if(pollutionIndex === 3){
                    setPollutionInfo('średnio-umiarkowana')
                }
                else if(pollutionIndex === 4){
                    setPollutionInfo('słaba')
                }
                else if(pollutionIndex === 5){
                    setPollutionInfo('zła')
                }
            }
        }
    },[pollution])
    
    return ( 
        <div className="pollution">
            <h2>jakość powietrza:</h2>
            <h2>{pollutionInfo}</h2>
        </div>
     );
}
 
export default Pollution;