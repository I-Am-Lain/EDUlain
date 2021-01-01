import React from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

let dataPoints = [{latitude: 47.359423, longitude: -122.021071},
    {latitude: 47.2052192687988, longitude: -121.988426208496},
    {latitude: 47.6307081, longitude: -122.1434325},
    {latitude: 47.3084488, longitude: -122.2140121},
    {latitude: 47.5524695, longitude: -122.0425407},
    {latitude: 38.530280, longitude: -90.210310},
    {latitude: 38.430280, longitude: -90.220310},
    {latitude: 38.330280, longitude: -90.230310},
    {latitude: 38.230280, longitude: -90.240310},
    {latitude: 38.130280, longitude: -90.250310},
    {latitude: 42.2808, longitude: -83.7430},
    {latitude: 41.8781, longitude: -87.6298},
    ]

const displayMarkers = () => {
    return dataPoints.map((store, index) => {
        return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
        }}
        onClick={() => console.log("You clicked me!")} />
    })
    }

const MapContainer = (props) => (
    <Map
        google={props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{ lat: 38.630280, lng: -90.200310}}
    >
    {displayMarkers()}
    </Map>
    
)



const mapStyles = {
    height: '80%',
    width: '90%',
    margin: 'auto'
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCBuLNZwlboCRLWt7S5XFRs5gGn5_MzYm0'
  })(MapContainer);