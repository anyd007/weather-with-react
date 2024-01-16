import { useState, useEffect } from 'react';

const CurrentLocation = () => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const getLocation = async () => {
            try {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        });
                        setLoading(false);
                    },
                    (error) => {
                        console.log("Błąd:", error);
                    }
                )
            }
            catch (error) {
                console.log("Błąd:", error);
            }
        }
        getLocation();
    }, [])
    return { location, loading, setLoading };
}

export default CurrentLocation;