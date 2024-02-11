import React from 'react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapEvents = () => {
  useMapEvents({
    click: (e) => {
      console.log(`Latitudine: ${e.latlng.lat}, Longitudine: ${e.latlng.lng}`)
    },
  })
  return null
}

const MapView = () => {
  const position = [41.9027835, 12.4963655] // Latitudine e longitudine di Roma

  return (
    <MapContainer center={position} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEvents />
    </MapContainer>
  );
};

export default MapView
