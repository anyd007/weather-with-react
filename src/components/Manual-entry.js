import { useState, useEffect } from "react";
import '../styles/manual-entry.scss';


const ManualEntry = ({setRequestedCity, setApiError, setLoading}) => {
    const [city, setCity] = useState('');

    const handleClick = () => {
        if (!city) {
            setApiError('Podaj nazwę miasta');
            return;
        }
        setRequestedCity(city);
        setCity('');
        setApiError(null);
        setLoading(true);
    }
    return ( 
        <div className="manula-entry">
            <div className="manual-enty-container">
                <input 
                type="text" 
                placeholder="podaj nazwę miasta" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleClick}>zatwierdź</button>
            </div>
        </div>
     );
}
 
export default ManualEntry;