async function fetchWeatherForecast(latitudine, longitudine) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitudine}&lon=${longitudine}&appid=36f11ef0b08f350df01a926d5e0f7f2d&units=metric&cnt=8&lang=it`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const weatherData = await response.json()
        return weatherData
    } catch (error) {
        console.error('Errore fetch weather forecast', error)
        return null
    }
}

export default fetchWeatherForecast

