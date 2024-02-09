import MainPosition from './MainPosition';
import weateherImageSorter from './Utility/weatherImageSorter';
import { useState, useEffect } from 'react';
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData';
import fetchWeatherForecast from './Utility/fetchWeatherForecast';
import arrayPreferenze from './Utility/arrayPreferenze.json';
import WeatherSmall from './WeatherSmall';

function DashboardMeteo(props) {
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState({ loading: true, error: false });
    const [weatherForecast, setWeatherForecast] = useState([]);

    const setCustomForecast = function (location) {
        const { latitude, longitude } = location;
        async function getCurrentWeather() {
            const forecasts = await fetchWeatherForecast(latitude, longitude);
            if (forecasts) {
                setWeatherForecast(forecasts);
                setCurrentLoadingStatus({ loading: false, error: false });
            } else {
                setCurrentLoadingStatus({ loading: false, error: true });
            }
        }

        getCurrentWeather();
    };

    useEffect(() => {
        const { latitude, longitude } = props.userLocation;
        if (latitude && longitude) {
            async function getCurrentWeather() {
                const forecasts = await fetchWeatherForecast(latitude, longitude);
                if (forecasts) {
                    setWeatherForecast(forecasts);
                    setCurrentLoadingStatus({ loading: false, error: false });
                } else {
                    setCurrentLoadingStatus({ loading: false, error: true });
                }
            }
            getCurrentWeather();
        }
    }, [props]);

    return (
        <div className="bg-body-tertiary d-flex flex-column justify-content-between">
            {currentLoadingStatus.loading ? <img src="https://http.cat/images/102.jpg" alt="loading" /> : currentLoadingStatus.error ? <img src="https://http.cat/images/400.jpg" alt="error" /> : <MainPosition weatherForecast={weatherForecast} />}
            <br />
            <h2 className='mx-2'>Altre località:</h2>
            <div className='d-flex flex-wrap'>
            {currentLoadingStatus.loading ? <img src="https://http.cat/images/102.jpg" alt="loading" /> : currentLoadingStatus.error ? <img src="https://http.cat/images/400.jpg" alt="error" /> :
                arrayPreferenze.map(position => {
                    return (
                <WeatherSmall key={position.id} position={{latitude: position.lat, longitude: position.lon}} />
                        )
                })}
            </div>
        </div>
    )
}

export default DashboardMeteo;
