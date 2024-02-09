import { useState, useEffect } from 'react'
import weatherImageSorter from './Utility/weatherImageSorter' // Corretto il nome dell'importazione
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function MainPosition(props) {

    useEffect(() => {
        console.log(props.weatherForecast.list)
    }, [props.weatherForecast]) 

    return (
        <div>
            <h1>Previsioni per le prossime 24 ore:</h1> 
            <Container>
                <Row className='gap-2'>
                    {props.weatherForecast.list ? props.weatherForecast.list.map((dailyForecast, index) => (
                        <div className='col-1 d-flex flex-column weatherColumnMain'  key={index}>
                            <p className='forecastTime'>{dailyForecast.dt_txt}</p>
                            <img alt="dailyIcon" src={weatherImageSorter(dailyForecast.weather[0].main)}></img>
                           <div>
                            <p>{dailyForecast.weather[0].description}</p>
                            <p>{dailyForecast.main.temp}° (min {dailyForecast.main.temp_min} - max {dailyForecast.main.temp_max} )</p>
                            <p>Temperatura percepita: {dailyForecast.main.feels_like}</p>
                            <p>Umidità: {dailyForecast.main.umidity}%</p>
                            <p>Vento: {dailyForecast.wind.speed}mph</p>
                          </div>
                        </div>
                    )) : <p>Loading...</p>}
                </Row>
            </Container>
        </div>
    )
}

export default MainPosition
