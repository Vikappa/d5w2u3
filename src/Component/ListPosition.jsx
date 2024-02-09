import React, { useEffect, useState } from 'react'
import  fetchCurrentWeatherData from './Utility/fetchCurrentWeatherData'
function ListPosition(props) {
  const [comune, setComune] = useState('')
console.log(props)

  async function setItemPosition(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  
    try {
      const response = await fetch(url)
      const data = await response.json()
      const comune = data.address.municipality || data.address.city //Potrebbero tornare solo uno dei due
      setComune(comune)
    } catch (error) {
      console.error("Errore nel trovare il comune più vicino: ", error)
    }
  }


   setItemPosition(props.position.latitude, props.position.longitude)
  

  useEffect(() => {
    if (props.location) {
      const { latitude, longitude } = props.location
      setItemPosition(latitude, longitude)
        .then(setComune)
        .catch(error => console.error("Errore durante la ricerca del comune: ", error))
    }
  }, [props.location])

  return(
    <div className=''>{comune}</div>
  )
}

export default ListPosition
