import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"
import "leaflet/dist/leaflet.css" 

const markerIcon = new L.Icon({
  iconUrl: "https://www.svgrepo.com/show/302636/map-marker.svg",
  iconSize: [40, 40],
  iconAnchor: [15, 30],
})

const CompanyMap = ({ center, zoom }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "400px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default CompanyMap;