const weateherImageSorter = (weatherString) => {
    switch (weatherString) {
      case 'Clouds':
        return 'weatherIcons/Cloud.png'
      case 'Rain':
        return 'weatherIcons/Rain.png'
      case 'Clear':
        return "weatherIcons/Sun.png"
      case 'Mist':
        return "weatherIcons/Haze.png"
      case 'Fog':
        return "weatherIcons/Haze.png"
      case 'Smoke':
        return "weatherIcons/Smoke.png"
      case 'Thunderstorm':
        return "weatherIcons/Thunderstorm.png"
        case 'Snow':
          return "weatherIcons/Snow.png"
      default: 
        return 'weatherIcons/errore.png'
    }
  }

  export default weateherImageSorter