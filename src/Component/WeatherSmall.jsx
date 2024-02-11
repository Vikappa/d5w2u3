import React, { useEffect, useState } from 'react'
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData'
import weateherImageSorter from './Utility/weatherImageSorter'
import { Link } from 'react-router-dom'

function WeatherSmall(props) {
  const [currentWeather, setCurrentWeather] = useState({})
 const [currentLoadingStatus, setCurrentLoadingStatus] = useState({loading: true, error: false})

 function maiuscFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

  useEffect(() => {
if(props.position.latitude && props.position.longitude) {
  async function getCurrentWeather() {
    const weatherData = await fetchCurrentWeatherData(props.position.latitude, props.position.longitude)
    if(weatherData) {
    setCurrentWeather(weatherData)
    setCurrentLoadingStatus({loading: false, error: false})
    } else{
      setCurrentLoadingStatus({loading: false, error: true})
    }
  }

  getCurrentWeather()
}
  }, [props.position.latitude, props.position.longitude])

  return (
currentLoadingStatus.loading? <div><p>Loading...</p></div> : (
  currentLoadingStatus.error? <div><p>Errore</p></div> : (
    
  <Link to={`/${props.position.latitude}/${props.position.longitude}`} style={{ textDecoration: 'none' }}>
  <div className='d-flex otherLocationWeather' >
    <div className='d-flex flex-column justify-content-center m-1 mx-3 align-items-start'>
  <img className='otherLocationWeatherImg' src={currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":weateherImageSorter(currentWeather.weather[0].id)} alt='weather forecast preview' />
 </div>
  <div className='d-flex flex-column justify-content-center align-items-start'>
  <p className='otherLocationWeatherP' >{currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":currentWeather.name}</p>
  </div>
  </div>
  </Link>
  )
  )
  )
}
export default React.memo(WeatherSmall)

