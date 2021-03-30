import React from 'react';
import styled from 'styled-components';
import { Button } from 'shards-react';

import { ReactComponent as Map } from '../../assets/map.svg';

const StyledToggleButton = styled(Button) `
  position: absolute;
  visibility: hidden;
  font-weight: bold;
  
  @media (max-width: 500px){
    visibility: visible;
    top: 69vh;
    left: 36vw;
    z-index: 2;
    width: 25vw;
    height: 9vh;
    padding: 0;
    border: 2px black solid;
    border-radius: .5rem;
  }
`;

const StyledMap = styled(Map) `
  width: 1.5rem;
`;

const MobileToggleButton = (props) => {
  return (
    <StyledToggleButton theme='success' onClick={() => props.setToggleView(!props.toggleView)}>
      <StyledMap /> {props.toggleView ? 'List' : 'Map'} View
    </StyledToggleButton>
  );
};

export default MobileToggleButton;
