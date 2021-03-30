import React, { useState } from 'react'
import { Container, Card, CardBody, Button, InputGroup, InputGroupAddon, FormInput, Form } from "shards-react";
import styled from 'styled-components';

import MapContainer from './fund/MapContainer'
import CardContainer from './fund/CardContainer'
import MobileToggleButton from './fund/MobileToggleButton'
import PartnerContainer from './fund/PartnerContainer'

// import splash from './assets/splash.jpg'
// import { ReactComponent as Loupe } from './assets/loupe.svg';

// Fund Splash Page Container
const StyledFundPage = styled(Container) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  background: url(${splash}) no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  
  position: absolute;
  top: 136px;
  bottom: 0px;
  font-family: 'Poppins', 'Roboto Regular', serif;
  padding-left: 0;
  padding-right: 0;
  max-width: 100% !important;  
`;

// Splash Page ENTIRE Search Bar
const StyledInputGroup = styled(InputGroup) `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: 3px gray solid;
  border-radius: .5rem;
`;

// Just bar
const StyledInput = styled(FormInput) `
  font-size: 26px;
  opacity: 100%;
`;

// Just button
const StyledButton = styled(Button) `
  font-size: 26px;
  background-color: #1264DE;
`;

// Bottom card
const StyledBottomFundCard = styled(Card) `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  text-align: center;
  
  font-size: 20px;
  opacity: 80%;
  border-radius: .5rem;
  padding: 0;

  @media (max-width: 1000px){
    margin-top: 3vh;
    width: 80%;
  }
`;

// Background Shadow Layer
const StyledBackgroundShadow = styled(Container) `
  position: absolute;
  opacity: 80%;
  background-color: black;

  height: 100%;
  max-width: 160vw;
`;

// Form
const StyledForm = styled(Form) `
  width: 48%;
  margin-top: .75vh;
  margin-bottom: 2vh;
  
  @media (max-width: 1000px){
    width: 94%;
  }
`;

/* justify-content: center == was producing weird display */
/* justify-content: flex-start more proper */
/* this, or the @media container, has an inner padding of 15px on left and right sides.*/
const StyledMapPage = styled(Container) `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  top: 136px;
  bottom: 0px;
  max-width: 100% !important;
`;

// Search Bar Loupe
const StyledLoupe = styled(Loupe) `
  width: 2rem;
`;


const Fund = (props) => {
  const [hasSearched, setHasSearched] = useState(false)
  const [text, setText] = useState('')
  const [rentals, setRentals] = useState([{ lat: 42.2808, lng: -83.7430 }])
  const [toggleView, setToggleView] = useState(false)

  const handleClick = () => {

    fetch(`https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=${text.split(', ').slice(0, -1).join('%20')}&state_code=${text.split(' ')[text.split(' ').length - 1]}&limit=50&offset=0&sort=relevance`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "realtor.p.rapidapi.com"
      }
    })
      .then(resp => resp.json())
      .then(json => {

        if (json.properties.length === 0) {
          alert(`0 Matches. Make sure of spelling, and a comma+space between city & state :)`)
          return props.history.push('/fund')
        }

        const numberOfRentals = json.meta.matching_rows

        setRentals(json.properties.map(pro => {
          return {
            lat: pro.address.lat,
            lng: pro.address.lon,
            photos: pro.photos,
            price_min: pro.community.price_min,
            price_max: pro.community.price_max,
            beds_min: pro.community.beds_min,
            beds_max: pro.community.beds_max,
            baths_min: pro.community.baths_min,
            baths_max: pro.community.baths_max,
            address: pro.address.line,
            link: pro.rdc_web_url,
            numberOfRentals: numberOfRentals
          }
        }))
        setHasSearched(true)

      })
      .catch(e => {
        alert(e)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    handleClick()
  }


  return (
    hasSearched ?
      <StyledMapPage>
        <MobileToggleButton toggleView={toggleView} setToggleView={setToggleView} />
        <CardContainer myInput={text} rentals={rentals} toggleView={toggleView} />
        <MapContainer myInput={text} rentals={rentals} toggleView={toggleView} />
      </StyledMapPage>
      :
      <StyledFundPage>

        <StyledBackgroundShadow>
        </StyledBackgroundShadow>

        <h1 style={{ color: 'white', zIndex: '1', marginTop: '5vh' }} >Find Affordable Off-Campus Housing Today</h1>

        <StyledForm onSubmit={e => handleSubmit(e)}>
          <StyledInputGroup>
            <StyledInput placeholder="Enter a city & state (e.g. St. Louis, MO)" onChange={val => setText(val.target.value)} />

            <InputGroupAddon type="append">
              <StyledButton theme="info" onClick={() => handleClick()} >
                <StyledLoupe />
              </StyledButton>
              <input type="submit" value="Submit" style={{ display: 'none' }} />
            </InputGroupAddon>

          </StyledInputGroup>
        </StyledForm>

        <StyledBottomFundCard>
          <CardBody>
            <h5>EDUrain is committed to helping students find the perfect apartment,
            home, or studio rental around your college campus in just minutes!</h5>
          </CardBody>
        </StyledBottomFundCard>

        <PartnerContainer />

      </StyledFundPage>
  );
};


export default Fund;
