import React, { useState } from 'react'
import { Container } from "shards-react";
import styled from 'styled-components';

import { ReactComponent as Empty } from '../../assets/empty.svg';
import { ReactComponent as Full } from '../../assets/full.svg';

const StyledInfoWindow = styled(Container) `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28.5rem;
  left: 200px;
  background: white;
  z-index: 100;
  border: 3px black solid;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
`;

const StyledEmpty = styled(Empty) `
  height: 2.5rem;
`;

const StyledFull = styled(Full) `
  height: 2.5rem;
`;

const Popup = ({ currentRentalMarker }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [favorites, setFavorites] = useState([])

  const handlePhotoBrowse = (currentRentalMarker) => {
    photoIndex !== currentRentalMarker.photos.length - 1 ? setPhotoIndex(photoIndex + 1) : setPhotoIndex(0)
  }

  return (
    <StyledInfoWindow>
      <h3>
        {currentRentalMarker.address}
        {
          favorites.includes(currentRentalMarker) ?
            <StyledFull onClick={() => {
              const favoritesMinusCurrent = favorites.filter(f => { return f !== currentRentalMarker })
              setFavorites(favoritesMinusCurrent)
            }} />
            :
            <StyledEmpty onClick={() => setFavorites([...favorites, currentRentalMarker])} />
        }
      </h3>
      <h5>${currentRentalMarker.price_min} for {currentRentalMarker.beds_max} bedrooms</h5>
      <img src={currentRentalMarker.photos[photoIndex].href} height='300px' alt='rental-info' onClick={() => handlePhotoBrowse(currentRentalMarker)} />
    </StyledInfoWindow>
  )
};

export default Popup;
