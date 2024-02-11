import {useState, useEffect} from 'react'
import fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData'
import weateherImageSorter from './Utility/weatherImageSorter'
import { Link } from 'react-router-dom'

function CubettoLocalità(props){

    const [currentWeather, setCurrentWeather] = useState({})
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState({loading: true, error: false})

    function maiuscFirstLetter(str) {
        if (typeof str !== 'string' || str.length === 0) {
            return str
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
      useEffect(() => {
    if(props.località.latitude && props.località.longitude) {
      async function getCurrentWeather() {
        const weatherData = await fetchCurrentWeatherData(props.località.latitude, props.località.longitude)
        if(weatherData) {
        setCurrentWeather(weatherData)
        setCurrentLoadingStatus({loading: false, error: false})
        } else{
          setCurrentLoadingStatus({loading: false, error: true})
        }
      }
      console.log(currentWeather)
      getCurrentWeather()
    }
      }, [props.località.latitude, props.località.longitude])
    

    useEffect(() => {
    }, [currentWeather])

    return(
        <>
{currentLoadingStatus.loading ?<p>Carico preferenza..</p> : currentLoadingStatus.error ? <p>Errore nel recupero dei dati</p> 
:
<Link to={`/${props.località.latitude}/${props.località.longitude}`}>
<div className='d-flex flex-column prefPrevCubetto text-center'>
    <p className='p-0'>{currentWeather.name}</p>
    <img src={weateherImageSorter(currentWeather.weather[0].id)} alt='preferences preview' />
</div>
</Link>

}
        </>
    )
}

function TueLocalità() {

    useEffect(() => {

        let realPreferences = JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences'))

    }, []) // L'array vuoto indica che questo effetto non dipende da nessun stato o prop e quindi si esegue solo una volta


    return(
        <div className='m-3'>
            <h3>Le tue località:</h3>
            <div className="d-flex">
                {JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences'))?
                 JSON.parse(localStorage.getItem('MesseSeasonsStorage__Preferences'))
                 .slice(-5) // Prende gli ultimi 5 elementi dell'array
                 .reverse()
                 .map((prefLocalità, index) =>{
                     return (
                         <CubettoLocalità località={prefLocalità} key={index} />
                     )
                 })
             :
             ""
                   }
            </div>
        </div>
    )

}

export default TueLocalità