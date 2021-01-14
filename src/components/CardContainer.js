import React from 'react'
import { Container, Card, CardBody, Button } from "shards-react";
import styled from 'styled-components';


const StyledCardContainer = styled(Container)`
    border: 5px blue solid;
    width: 35%;
    margin: 0;

`;

const StyledRentalCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 5px orange solid;
    
    font-size: 22px;
    opacity: 50%;
`;

const StyledButton = styled(Button)`
    font-size: 40px;
`;



const CardContainer = () => {

  return (
      <StyledCardContainer>

        <StyledRentalCard>
            <CardBody>
                I am committed to getting this god damn thing to work, I guarantee it.
            </CardBody>
        </StyledRentalCard>

        <StyledRentalCard>
            <CardBody>
                I am committed to getting this god damn thing to work, I guarantee it.
            </CardBody>
        </StyledRentalCard>

        <StyledRentalCard>
            <CardBody>
                I am committed to getting this god damn thing to work, I guarantee it.
            </CardBody>
        </StyledRentalCard>

        <StyledRentalCard>
            <CardBody>
                I am committed to getting this god damn thing to work, I guarantee it.
            </CardBody>
        </StyledRentalCard>
      </StyledCardContainer>
        
        
         

  );
}

export default CardContainer;
