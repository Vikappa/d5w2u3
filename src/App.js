import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import NavbarMeteo from './Component/NavbarMeteo'
import DashboardMeteo from './Component/DashboardMeteo'
import './App.css'

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
    const formData = new FormData(event.target)
    const latitude = formData.get('latitude')
    const longitude = formData.get('longitude')
    setUserLocation({ latitude, longitude })
    setShowModal(false)
  }
  return (
    <div>
      <NavbarMeteo logo={props.logo} userLocation={userLocation} />
      <DashboardMeteo userLocation={userLocation} />
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci la tua posizione</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleLocationSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Latitudine</Form.Label>
              <Form.Control type="text" name="latitude" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Longitudine</Form.Label>
              <Form.Control type="text" name="longitude" required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Chiudi
            </Button>
            <Button variant="primary" type="submit">
              Salva Posizione
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default App
