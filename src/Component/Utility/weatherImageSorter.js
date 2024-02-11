import cloudPng from './weatherIcons/Cloud.png'
import rainPng from './weatherIcons/Rain.png'
import snowPng from './weatherIcons/Snow.png'
import thunderstormPng from './weatherIcons/Thunderstorm.png'
import mistPng from './weatherIcons/Haze.png'
import smokePng from './weatherIcons/Smoke.png'
import sunPng from './weatherIcons/Sun.png'

const weateherImageSorter = (weatherString) => {
    switch (weatherString) {
      case 'Clouds':
        return cloudPng
      case 'Rain':
        return rainPng
        case 'Drizzle':
          return rainPng
      case 'Clear':
        return sunPng
      case 'Mist':
        return mistPng
      case 'Fog':
        return mistPng
      case 'Smoke':
        return smokePng
      case 'Thunderstorm':
        return thunderstormPng
        case 'Snow':
          return snowPng
      default: 
        return 'weatherIcons/errore.png'
    }
  }

  export default weateherImageSorter