import MainPosition from './MainPosition'
import weateherImageSorter from './Utility/weatherImageSorter'
import {useState, useEffect} from'react'    
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData'

function DashboardMeteo(props) {
    const [currentWeather, setCurrentWeather] = useState({})
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState({loading: true, error: false})
    
     useEffect(() => {
       async function getCurrentWeather() {
         const weatherData = await fetchCurrentWeatherData(props.userLocation.latitude, props.userLocation.longitude)
         if(weatherData) {
         setCurrentWeather(weatherData)
         setCurrentLoadingStatus({loading: false, error: false})
         } else{
           setCurrentLoadingStatus({loading: false, error: true})
         }
       }
   
       getCurrentWeather()
     }, [props.userLocation.latitude, props.userLocation.longitude])

    return (
        <div className="container-fluid bg-body-tertiary d-flex flex-column flex-lg-row justify-content-between">
        <MainPosition weather={currentWeather} />
            <div>
            </div>
        </div>
    )
}

export default DashboardMeteo