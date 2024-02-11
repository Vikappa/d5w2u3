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
    
  <Link to={`/${props.position.latitude}/${props.position.longitude}`}>
  <div className='d-flex otherLocationWeather p-1'>
    <div className='d-flex flex-column justify-content-center m-1 mx-3 align-items-start'>
  <img className='otherLocationWeatherImg' src={currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":weateherImageSorter(currentWeather.weather[0].id)} alt='weather forecast preview' />
 </div>
  <div className='d-flex flex-column justify-content-center align-items-start me-3'>
  <p className='otherLocationWeatherP' >{currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":currentWeather.name+ ", " + currentWeather.sys.country}</p>
  <p className='otherLocationWeatherP2' >{currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":maiuscFirstLetter(currentWeather.weather[0].description)}</p>
  <p className='otherLocationWeatherP3' >Temperatura: {currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":currentWeather.main.temp}°</p>
  </div>
  </div>
  </Link>
  )
  )
  )
}
export default React.memo(WeatherSmall)

