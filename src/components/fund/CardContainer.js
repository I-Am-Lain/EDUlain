import React from 'react'
import { Container, Row, Card, CardBody, CardTitle, CardImg, Button, FormSelect, FormInput, InputGroup, InputGroupAddon } from "shards-react";
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Loupe } from '../../assets/loupe.svg';
import MyFormSelect from './MyFormSelect'

// The entire Left-Hand side of the 'Card/Map' Page
const StyledCardContainer = styled(Container) `
  width: 100%;
  margin: 0;
  flex-wrap: wrap;
  font-family: 'Poppins', 'Roboto Regular', serif;
  
  overflow: hidden; 
  overflow-y: scroll;

  display: ${props => props.toggle === 'true' ? 'none' : 'block'};
`;

// Each card
const StyledRentalCard = styled(Card) `
  border: 3px black solid;
  margin-top: .5rem;
  font-size: 22px;
  padding: 0;

  border-radius: .5rem;
  width: 28rem;
  height: 32rem;
  margin: 0 .5rem .5rem 0;

  @media (max-width: 1000px){
    height: 31rem;
  }
`;

// Card Image
const StyledCardImg = styled(CardImg) `
  max-width: 28rem;
  height: 19rem;

  @media (max-width: 1000px){
    max-width: 25rem;
    height: 20rem;
  }
`;

// Card body
const StyledCardBody = styled(CardBody) `
  padding: .5rem 1rem .75rem 1rem;
`;

// Card Title
const StyledCardTitle = styled(CardTitle) `
  font-size: 30px; 
  margin-bottom: 0;
`;

// The Search Bar Button
const StyledButton = styled(Button) `
  font-size: 32px;
  background-color: #1264de;
`;

// THE WHOLE SEARCH BAR
const StyledInputGroup = styled(InputGroup) `
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: .4rem;
  width: 109vw;
`;

// Container for Search button
const StyledInputGroupAddon = styled(InputGroupAddon) `
  margin-right: .5rem;
`;

//padding-right helps grow the search bar
// Just the search bar
const StyledInput = styled(FormInput) `
  font-size: 32px;
  border-radius: .3rem;
`;

// Contact Now button
const StyledContactButton = styled(Button) `
  font-size: 26px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  line-height: 2;
  border-radius: .4rem;
`;

// 'More' dropdown
const StyledMoreSelect = styled(FormSelect) `
  font-size: 22px;
  line-height: 1.5rem;
  border: 2px #2282F6 solid;
  margin-right: 4.5rem;
  border-radius: .25rem;
`;

// Price sort dropdown
const StyledPriceSelect = styled(FormSelect) `
  font-size: 22px;
  line-height: 1.5rem;
  margin-left: .5rem;
  margin-bottom: .5rem;
  border: 2px green solid;
  width: 13vw;
  border-radius: .25rem;
  
  @media (max-width: 1000px){
    width: 19vw;
  }
`;

// Search Bar Loupe
const StyledLoupe = styled(Loupe) `
  width: 2rem;
`;

const CardContainer = (props) => {

  return (
    <StyledCardContainer toggle={props.toggleView.toString()} >

      <Row>
        <StyledInputGroup>

          <StyledInput style={{ width: '35rem' }} placeholder={props.myInput} onChange={() => { }} />

          <StyledInputGroupAddon type="append">
            <StyledButton style={{ borderRadius: '.25rem' }} theme="info" onClick={() => { }} >
              <StyledLoupe />
            </StyledButton>
          </StyledInputGroupAddon>

          <StyledMoreSelect>
            <option value="More">More</option>
            <option value="Options">Options</option>
            <option value="Here">Here</option>
          </StyledMoreSelect>

        </StyledInputGroup>
      </Row>


      <Row>
        <MyFormSelect options={['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '3+ Bedrooms']} />

        <MyFormSelect options={['Any Price', '**Min/Max Here**']} />

        <MyFormSelect options={['All Unit Styles', 'Apartments', 'Houses', 'Town Homes']} />

        <MyFormSelect options={['Pets', 'Dogs allowed', 'Cats allowed']} />
      </Row>


      <Row>
        <p><span className='my-card-header'>
          Apartments and Homes in <span style={{ textDecoration: 'underline' }}> {props.myInput} </span>
        </span></p>

        <p><span className='my-card-header-2'>
          <span style={{ textDecoration: 'underline' }}> {props.rentals[0].numberOfRentals}</span> apartments currently available!
        </span></p>

        <StyledPriceSelect>
          <option value="Price $-$$$">Price $-$$$</option>
          <option value="Price $$$-$">Price $$$-$</option>
        </StyledPriceSelect>
      </Row>


      <Row>
        {
          props.rentals.map((rental, index) => {
            return (
              <StyledRentalCard key={index}>
                <StyledCardImg src={rental.photos[0].href} />

                <StyledCardBody>
                  <StyledCardTitle><b> ${rental.price_min}/mo </b></StyledCardTitle>
                  <p style={{ marginBottom: '0' }} >
                    <FontAwesomeIcon icon={faBed} size={'2x'} style={{ marginRight: '.3rem' }} />{rental.beds_max} bedrooms
                    <FontAwesomeIcon icon={faBath} size={'2x'} style={{ marginRight: '.3rem' }} />{rental.baths_max} bath(s)
                  </p>

                  <p style={{ marginBottom: '0' }} ><i>{rental.address}</i></p>
                  <StyledContactButton href={rental.link}>See More Details &rarr;</StyledContactButton>
                </StyledCardBody>

              </StyledRentalCard>
            )
          })
        }
      </Row>

    </StyledCardContainer>
  );
};

export default CardContainer;
