import MainPosition from './MainPosition'
import weateherImageSorter from './Utility/weatherImageSorter'
import {useState, useEffect} from'react'    
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData'
import fetchWeatherForecast from './Utility/fetchWeatherForecast'

function DashboardMeteo(props) {
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState({loading: true, error: false})
    const [weatherForecast, setWeatherForecast] = useState([])

    useEffect(() => {
        const { latitude, longitude } = props.userLocation
        if (latitude && longitude) {
            async function getCurrentWeather() {
                const forecasts = await fetchWeatherForecast(latitude, longitude)
                if (forecasts) {
                    setWeatherForecast(forecasts)
                    setCurrentLoadingStatus({loading: false, error: false})
                } else {
                    setCurrentLoadingStatus({loading: false, error: true})
                }
            }
            getCurrentWeather()
        }
    }, [props])
    
    
    
    return (
        <div className="bg-body-tertiary d-flex flex-column justify-content-between">
        {currentLoadingStatus.loading?<img src='https://http.cat/images/102.jpg' alt='loading'></img>:currentLoadingStatus.error?<img src='https://http.cat/images/400.jpg' alt='error'></img>:<MainPosition weatherForecast={weatherForecast} />}
        </div>
    )
}

export default DashboardMeteo