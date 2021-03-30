import React from 'react';

const MyMarker = (props) => {
  return (
    <>
      <div className='pin' onClick={() => props.setPopupInfo(props.rentalInfo)}></div>
      <div className='pulse'></div>
    </>
  )
};

export default MyMarker;
