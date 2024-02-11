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
      getCurrentWeather()
    }
      }, [props.località.latitude, props.località.longitude])
    

    useEffect(() => {
    }, [currentWeather])

    return(
        <>
{currentLoadingStatus.loading ?<p>Carico preferenza..</p> : currentLoadingStatus.error ? <p>Errore nel recupero dei dati</p> 
:
<Link to={`/${props.località.latitude}/${props.località.longitude}`} style={{ textDecoration: 'none' }} >
<div className='d-flex prefPrevCubetto text-center align-items-center justify-content-center'>
    <img src={weateherImageSorter(currentWeather.weather[0].id)} alt='preferences preview' />
    <div className='d-flex flex-column align-items-center justify-content-center' >
    <p className='p-0 m-0 mx-2' style={{ textDecoration: 'none' }}>{currentWeather.name}</p>
    </div>
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
        <div className='my-3 p-3 bg-light' id="tueLocalità">
            <h3>Le tue località:</h3>
            <div className="d-flex flex-column flex-md-row align-items-start">
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