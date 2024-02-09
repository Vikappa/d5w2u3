import React, { useEffect, useState } from 'react'
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData'

function ListPosition(props) {
  const [currentWeather, setCurrentWeather] = useState({})
 const [currentLoadingStatus, setCurrentLoadingStatus] = useState({loading: true, error: false})

const weateherImageSorter = (weatherString) => {
  switch (weatherString) {
    case 'Clouds':
      return 'weatherIcons/Cloud.png'
      case 'Rain':
        return 'weatherIcons/Rain.png'
      default: 
      return 'error'
  }
}


  useEffect(() => {
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
  }, [props.position.latitude, props.position.longitude])

  return (
    <div className='d-flex navBarWeather'>
<img className='navBarWeatherImg' src={currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":weateherImageSorter(currentWeather.weather[0].main)} alt='weather forecast navbar' />
    <div className='d-flex flex-column justify-content-center align-items-start'>
    <p className='text-start' >{currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":currentWeather.name}</p>
    <p className='text-start' >{currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":currentWeather.weather[0].description}</p>
    <p className='text-start' >Temperatura: {currentLoadingStatus.loading?"Loading":currentLoadingStatus.error?"Errore":currentWeather.main.temp}°</p>
    </div>
    </div>
  );
}

export default ListPosition
