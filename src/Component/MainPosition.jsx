import { useState, useEffect } from 'react'
import weatherImageSorter from './Utility/weatherImageSorter' // Corretto il nome dell'importazione
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TueLocalità from './TueLocalità'

function maiuscFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function MainPosition(props) {

    useEffect(() => {
        // Fai robe se cambiano i props
    }, [props.weatherForecast]) 

    return (
        <div className=''>
            <h3 className='mx-2'>Previsioni per le prossime 24 ore per {props.weatherForecast.city.name}:</h3>
        <div className='d-flex justify-content-evenly flex-column flex-md-row gap-0 '>
                    {props.weatherForecast.list ? props.weatherForecast.list.map((dailyForecast, index) => (
                        <div className=' p-1 col-1 d-flex flex-md-column weatherColumnMain'  key={index}>
                            <p className='forecastColumnP text-center mb-0' id='forecastTime'>{dailyForecast.dt_txt}</p>
                            <img className='forecastIcon' alt="dailyIcon" src={weatherImageSorter(dailyForecast.weather[0].main)}></img>
                            <div className='d-flex flex-md-column justify-content-center align-items-center'>
                            <p className='forecastColumnP text-center p-0' >{maiuscFirstLetter(dailyForecast.weather[0].description)}</p>
                            <div className='d-flex flex-column' >
                            <p className='forecastColumnP gradiCol text-center mb-0' >{dailyForecast.main.temp}°</p>
                            <p className='forecastColumnP text-nowrap text-center mb-0' id="minmaxTemp" >(min {dailyForecast.main.temp_min} - max {dailyForecast.main.temp_max})</p>
                            <p className='forecastColumnP text-center' id='tempPerce' >Percepita: {dailyForecast.main.feels_like}</p>
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
