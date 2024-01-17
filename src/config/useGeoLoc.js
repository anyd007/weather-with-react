import { useState, useEffect } from "react";

const useGeoLoc = () => {
    const [location, setLocation] = useState(null);
    const [geoError, setGeoError] = useState(null);
    const [geoLoading, setGeoLoading] = useState(true);
    useEffect(() => {
        const getLocation = async () => {
        try {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                    setGeoLoading(false);
                },
                (error) => {
                    console.log(error);
                    setGeoError(error);
                    setGeoLoading(false);
                }
            );
        } catch (error) {
            console.log(error);
            setGeoError(error);
            setGeoLoading(false);
        }
    }
    getLocation();
    }, []);
    return {location, geoError, geoLoading}
}

export default useGeoLoc;