async function fetchCurrentWeatherData(latitudine, longitudine) {

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitudine}&lon=${longitudine}&units=metric&appid=36f11ef0b08f350df01a926d5e0f7f2d`)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const weatherData = await response.json()
        return weatherData
    } catch (error) {
        console.error('Errore fetch weather corrente', error)
        return null
    }
}

export default fetchCurrentWeatherData

