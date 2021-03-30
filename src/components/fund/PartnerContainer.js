import React from 'react'
import { Container, Card, CardBody, CardImg, Button } from "shards-react";
import styled from 'styled-components';

// TODO:
//       - Once partnerships/API secured, then we can implement this!
//

const StyledPartnerContainer = styled(Container) `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40%;
  border-radius: .25em;
  padding: 0;
  margin-top: 3vh;
  
  @media (max-width: 1000px){
    margin-top: 5vh;
    width: 80%;
  }
`;

const StyledPartnerCard = styled(Card) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  border-radius: .75em;
  padding: 0;
  margin: .5em;
`;

const StyledCardImg = styled(CardImg) `
  height: 15vh;
`;

const StyledContactButton = styled(Button) `
  font-size: 26px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  line-height: 2;
  border-radius: .4em;
  width: 15vw;
`;

const PartnerContainer = () => (
  <StyledPartnerContainer>

    <StyledPartnerCard>
      <CardBody>
        <h3>Renters' Insurance?</h3>
        <StyledCardImg style={{ marginBottom: '10px' }} src='https://1000logos.net/wp-content/uploads/2018/03/State-Farm-Logo.png' />
        <StyledContactButton> Learn More </StyledContactButton>
      </CardBody>
    </StyledPartnerCard>

    <StyledPartnerCard>
      <CardBody>
        <h3>Background Check?</h3>
        <StyledCardImg style={{ marginBottom: '10px' }} src='https://banner2.cleanpng.com/20180720/ggo/kisspng-computer-icons-security-symbol-download-share-icon-guard-icon-5b516e006dee15.4589905115320632324503.jpg' />
        <StyledContactButton> Get Started </StyledContactButton>
      </CardBody>
    </StyledPartnerCard>

  </StyledPartnerContainer>
)

export default PartnerContainer;
