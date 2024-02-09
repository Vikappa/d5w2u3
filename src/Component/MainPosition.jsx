import { useState, useEffect } from 'react'
import weatherImageSorter from './Utility/weatherImageSorter' // Corretto il nome dell'importazione
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function maiuscFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}


function MainPosition(props) {

    useEffect(() => {
        console.log(props.weatherForecast.list)
    }, [props.weatherForecast]) 

    return (
        <div>
            <h3>Previsioni le prossime 24 ore:</h3>
        <div className='d-flex justify-content-evenly gap-0'>
                    {props.weatherForecast.list ? props.weatherForecast.list.map((dailyForecast, index) => (
                        <div className=' p-0 col-1 d-flex flex-column weatherColumnMain'  key={index}>
                            <p className='forecastColumnP text-center mb-0' id='forecastTime'>{dailyForecast.dt_txt}</p>
                            <img alt="dailyIcon" src={weatherImageSorter(dailyForecast.weather[0].main)}></img>
                           <div>
                            <p className='forecastColumnP text-center' >{maiuscFirstLetter(dailyForecast.weather[0].description)}</p>
                            <p className='forecastColumnP text-center mb-0' >{dailyForecast.main.temp}°</p>
                            <p className='forecastColumnP text-nowrap text-center mb-0' id="minmaxTemp" >(min {dailyForecast.main.temp_min} - max {dailyForecast.main.temp_max})</p>
                            <p className='forecastColumnP text-center' id='tempPerce' >Percepita: {dailyForecast.main.feels_like}</p>
                            <p className='forecastColumnP' >Umidità: {dailyForecast.main.umidity}%</p>
                            <p className='forecastColumnP' >Vento: {dailyForecast.wind.speed}mph</p>
                          </div>
                        </div>
                    )) : <p>Loading...</p>}
        </div>
        </div>
    )
}

export default MainPosition
