import React, { useState } from 'react'
import { Container } from "shards-react";
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react';

import MyMarker from './MyMarker/'
import Popup from './Popup'

// The Map Container
const StyledMapContainer = styled(Container) `
  width: 100%;
  height: 100%;

  @media (max-width: 1000px){
    display: ${props => props.toggle === 'true' ? 'block' : 'none'};
  }
`;

// Options that should add functionality
const getMapOptions = () => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  }
};


const MapContainer = ({ rentals, currentRentalMarker, toggleView }) => {

  const [popupInfo, setPopupInfo] = useState(false)

  return (
    <StyledMapContainer toggle={toggleView.toString()} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={{ lat: rentals[0].lat, lng: rentals[0].lng }}
        defaultZoom={12}
        options={getMapOptions}
      >
        {
          rentals.map((rental, index) => {
            return (
              <MyMarker
                key={index}
                rentalInfo={rental}
                lat={rental.lat}
                lng={rental.lng}
                setPopupInfo={setPopupInfo}
              />
            )
          })
        }
        {
          popupInfo && (<Popup
            currentRentalMarker={popupInfo}
            lat={popupInfo.lat}
            lng={popupInfo.lng}
          />)
        }
      </GoogleMapReact>
    </StyledMapContainer>
  );
};

export default MapContainer;
