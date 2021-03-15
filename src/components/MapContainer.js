import React from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {

    return(
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: props.rentals[0].lat, lng: props.rentals[0].lng}} // will probably have to change this for re-searching
                onClick={() => console.log(props)}
                // center={props.center}
            >
                {
                    props.rentals.map((pro, index) => {
                        return <Marker key={index} id={index} position={{
                        lat: pro.lat,
                        lng: pro.lng
                        }}
                        onClick={() => alert(`I'm at ${pro.address} for $${pro.price_min}/month!!`)} />
                    })
                }
            </Map>
        
    )
    
}

const mapStyles = {
    height: '100%',
    width: '65%',
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(MapContainer);
  