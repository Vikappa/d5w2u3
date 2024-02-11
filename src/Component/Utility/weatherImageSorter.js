import errorPlaceholder from './weatherIcons/errore.png'
import brokenClouds from './weatherIcons/broken clouds.png'
import clearDay from './weatherIcons/clear day.png'
import clearNight from './weatherIcons/clear night.png'
import drizzle from './weatherIcons/drizzle.png'
import dust from './weatherIcons/dust.png'
import fewCloudsDay from './weatherIcons/few clouds day.png'
import fewCloudsNight from './weatherIcons/few clouds night.png'
import heavySnow from './weatherIcons/heavy snow.png'
import mist from './weatherIcons/mist.png'
import rainDay from './weatherIcons/rain day.png'
import rainNight from './weatherIcons/rain night.png'
import scatteredClouds from './weatherIcons/scattered clouds.png'
import showerRain from './weatherIcons/shower rain.png'
import smoke from './weatherIcons/smoke.png'
import lightSnow from './weatherIcons/snow day.png'
import thunderstorm from './weatherIcons/thunderstorm.png'
import tornado from './weatherIcons/tornado.png'
import volcanicAsh from './weatherIcons/volcanic ash.png'
import snowRain from './weatherIcons/snow rain.png'
import fog from './weatherIcons/fog.png'

const weateherImageSorter = (weatherString) => {
    switch (weatherString) {
      case 200:
        return thunderstorm
      case 201:
        return thunderstorm
      case 202:
        return thunderstorm
      case 210:
        return thunderstorm
      case 211:
        return thunderstorm
      case 212:
        return thunderstorm
      case 221:
        return thunderstorm
      case 230:
        return thunderstorm
      case 231:
        return thunderstorm
      case 232:
        return thunderstorm
   
      case 300:
        return drizzle
      case 301:
        return drizzle
      case 302:
        return drizzle
      case 310:
        return drizzle
      case 311:
        return drizzle
      case 312:
        return drizzle
      case 313:
        return drizzle
      case 314:
        return drizzle
      case 321:
        return drizzle

      case 500:
        return rainDay
      case 501:
        return rainDay
      case 502:
        return showerRain
      case 503:
        return rainNight
      case 504:
        return rainNight
      case 511:
        return lightSnow
      case 520:
        return rainNight
      case 521:
        return showerRain
      case 522:
        return rainNight
      case 531:
        return rainNight

      case 600:
        return lightSnow
      case 601:
        return lightSnow
      case 602:
        return heavySnow
      case 611:
        return lightSnow
      case 612:
        return thunderstorm
      case 613:
        return snowRain
      case 615:
        return snowRain
      case 616:
        return snowRain
      case 620:
        return snowRain
      case 621:
        return heavySnow
      case 622:
        return heavySnow
            
      case 701:
        return mist
      case 711:
        return smoke
      case 721:
        return mist
      case 731:
        return dust
      case 741:
        return fog
      case 751:
        return dust
      case 761:
        return dust
      case 762:
        return volcanicAsh
      case 771:
        return tornado
      case 781:
        return tornado

      case 800:
        return clearDay
      case 801:
        return fewCloudsDay
      case 802:
        return scatteredClouds
      case 803:
        return brokenClouds
      case 804:
        return brokenClouds

                    
      default: 
        return errorPlaceholder
    }
  }

  export default weateherImageSorter