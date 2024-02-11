import MainPosition from './MainPosition';
import { useState, useEffect } from 'react';
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData';
import fetchWeatherForecast from './Utility/fetchWeatherForecast';
import arrayPreferenze from './Utility/arrayPreferenze.json';
import WeatherSmall from './WeatherSmall';
import { useParams } from 'react-router-dom';


function DashboardMeteo(props) {
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState({ loading: true, error: false });
    const [weatherForecast, setWeatherForecast] = useState([])
    const { latitude, longitude } = useParams()


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

        getCurrentWeather()
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences'))) {
            for (let index = 0; index < JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences')).length; index++) {
                 arrayPreferenze.push(
                    {
        lat:  JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences'))[index].latitude, lon: JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences'))[index].longitude}
                
                )
console.log(arrayPreferenze)
            }
        }
      }, [])

    useEffect(() => {
        if (latitude && longitude) {
            async function getCurrentWeather() {
                setCurrentLoadingStatus({ loading: true, error: false }) // Resetta lo stato di caricamento
                const forecasts = await fetchWeatherForecast(latitude, longitude)
                if (forecasts) {
                    setWeatherForecast(forecasts)
                    setCurrentLoadingStatus({ loading: false, error: false })
                } else {
                    setCurrentLoadingStatus({ loading: false, error: true })
                }
            }
            getCurrentWeather()
        }
    }, [latitude, longitude]) // Osserva i cambiamenti nell'url


    useEffect(() => {
        const { latitude, longitude } = props.userLocation;
        if (latitude && longitude) {
            async function getCurrentWeather() {
                const forecasts = await fetchWeatherForecast(latitude, longitude)
                if (forecasts) {
                    setWeatherForecast(forecasts)
                    setCurrentLoadingStatus({ loading: false, error: false })
                } else {
                    setCurrentLoadingStatus({ loading: false, error: true })
                }
            }
            getCurrentWeather()
        }
    }, [props])

    return (
        <div className="bg-body-tertiary d-flex flex-column justify-content-between">
            {currentLoadingStatus.loading ? <img src="https://http.cat/images/102.jpg" alt="loading" /> : currentLoadingStatus.error ? <img src="https://http.cat/images/400.jpg" alt="error" /> : <MainPosition weatherForecast={weatherForecast} />}
            <br />
            <h2 className='mx-2'>Altre località:</h2>
            <div className='d-flex flex-wrap'>
            {
                arrayPreferenze.map((position, index) => {
                    return (
                <WeatherSmall key={index} position={{latitude: position.lat, longitude: position.lon}} />
                        )
                })}
            </div>
        </div>
    )
}

export default DashboardMeteo
