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

  export default weateherImageSorter