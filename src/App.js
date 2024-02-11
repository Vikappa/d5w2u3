import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import NavbarMeteo from './Component/NavbarMeteo'
import DashboardMeteo from './Component/DashboardMeteo'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import './App.css'
import MapView from './Component/MapView'

function App(props) {
  const [userLocation, setUserLocation] = useState({ latitude: null, longitude: null })
  const [showModal, setShowModal] = useState(false)

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        () => {
          setShowModal(true)
        }
      )
    } else {
      setShowModal(true)
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  // Gestisce la chiusura del modale e l'aggiornamento delle coordinate
  const handleModalClose = () => setShowModal(false)
  const handleLocationSubmit = (event) => {
    event.preventDefault()
    setShowModal(false)
  }

  const chiudiModale = function () {
  handleModalClose()
  if(!userLocation.latitude || !userLocation.longitude){
  setUserLocation({latitude: 0, longitude: 0})
  }
}
  
  return (
    <div>
      <BrowserRouter>
        <NavbarMeteo logo={props.logo} userLocation={userLocation} setShowModal={setShowModal} />
        <Routes>
        <Route path="/" element={<DashboardMeteo userLocation={userLocation} />} />
        <Route path="/:latitude/:longitude" element={<DashboardMeteo userLocation={userLocation} />} />
        </Routes>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Clicca sulla tua posizione</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleLocationSubmit}>
            <Modal.Body>
            <MapView setUserPosition={setUserLocation} handleModalClose={handleModalClose} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={chiudiModale}>
                Chiudi
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </BrowserRouter>
    </div>
  )
  
}

export default App
