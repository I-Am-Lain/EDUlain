import React from 'react';
import { FormSelect } from "shards-react";
import styled from 'styled-components';


const StyledFormSelect = styled(FormSelect) `
  width: 11rem;
  font-size: 1rem;
  line-height: 1rem;
  border: 2px #2282F6 solid;
  margin: .2rem;
  border-radius: .25rem;
  @media (max-width: 1000px){
    font-size: 1rem;
    line-height: 1rem;
    width: 6rem;
  }
`;

const MyFormSelect = (props) => (
  <StyledFormSelect>
    {
      props.options.map(opt => {
        return <option key={opt} value={opt}> {opt} </option>
      })
    }
  </StyledFormSelect>
);

export default MyFormSelect;
