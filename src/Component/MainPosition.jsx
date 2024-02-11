import { useState, useEffect } from 'react'
import weateherImageSorter from './Utility/weatherImageSorter' // Corretto il nome dell'importazione
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TueLocalità from './TueLocalità'

function maiuscFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function parseDate(dateString) {
    const date = new Date(dateString)
    const dateOptions = { weekday: 'long', day: 'numeric' }
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false }
    const formattedDate = date.toLocaleDateString('it-IT', dateOptions)
    const formattedTime = date.toLocaleTimeString('it-IT', timeOptions)
    return `${maiuscFirstLetter(formattedDate)} ${formattedTime}`
}


function MainPosition(props) {

    useEffect(() => {
        // Fai robe se cambiano i props
    }, [props.weatherForecast]) 

    return (
        <div id='firstStripe'>
            <h3 className='m-3'>Previsioni per le prossime 24 ore per {props.weatherForecast.city.name}:</h3>
        <div className='d-flex justify-content-evenly flex-column flex-md-row gap-0'>
                    {props.weatherForecast.list ? props.weatherForecast.list.map((dailyForecast, index) => (
                        <div className=' p-1 col-1 d-flex flex-md-column weatherColumnMain'  key={index}>
                            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                            <p className='forecastColumnP text-center mb-0 forecastTime'>{parseDate(dailyForecast.dt_txt)}</p>
                            </div>
                            <img className='forecastIcon' alt="dailyIcon" src={weateherImageSorter(dailyForecast.weather[0].id)}></img>
                            <div className='d-flex flex-md-column justify-content-center align-items-center'>
                            <p className='forecastColumnP text-center p-0' >{maiuscFirstLetter(dailyForecast.weather[0].description)}</p>
                            <div className='tempWrapper' >
                            <p className='forecastColumnP gradiCol text-center mb-0' >{dailyForecast.main.temp}°</p>
                            <p className='forecastColumnP text-nowrap text-center mb-0 minmaxTemp mx-auto' >(min {dailyForecast.main.temp_min} max {dailyForecast.main.temp_max})</p>
                            <p className='forecastColumnP text-center tempPerce' >Percepita: {dailyForecast.main.feels_like}°</p>
                            </div>
                            <p className='forecastColumnPHum text-center' >Umidità: {dailyForecast.main.humidity}%</p>
                            <p className='forecastColumnPSpeed text-center ' >Vento: {dailyForecast.wind.speed}mph</p>
                          </div>
                          
                        </div>
                    )) : <p>Loading...</p>}
        </div>
        <TueLocalità/>
        </div>
    )
}

export default MainPosition
