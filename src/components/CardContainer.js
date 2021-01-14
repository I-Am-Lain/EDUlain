import React from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button, FormSelect, FormRadio, FormInput, InputGroup, InputGroupAddon } from "shards-react";
import styled from 'styled-components';


const StyledCardContainer = styled(Container)`
    border: 5px blue solid;
    width: 35%;
    margin: 0;

`;

const StyledRentalCard = styled(Card)`

    margin-top: 2em;
    font-size: 22px;
`;

const StyledButton = styled(Button)`
    font-size: 40px;
`;

const StyledFormSelect = styled(FormSelect)`
    width: 8em;
    height: 3em;
    font-size: 22px;
    line-height: 1em;
    border: 2px #00CED1 solid;
    margin: .5em;
`;




//SEARCH BAR BUTTON STUFF ABOVE CARDS
const StyledInputGroup = styled(InputGroup)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 80%;
    margin-top: .8em;
    margin-bottom: .8em;

`;

const StyledInput = styled(FormInput)`
    width: 40%;
    margin-bottom: 2em;
    font-size: 40px;

`;


const CardContainer = (props) => {

  return (
      <StyledCardContainer>
            <Row>
                <StyledInputGroup>
                    <StyledInput placeholder={props.myInput} onChange={() => {}} />

                    <InputGroupAddon type="append">
                        <StyledButton theme="info" onClick={() => {}} > 
                            <svg style={{height: '1em', color: 'white'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </StyledButton>
                    </InputGroupAddon>
                </StyledInputGroup>
            </Row>

            <Row>
                    <StyledFormSelect>
                        <option value="first">1 Bedroom</option>
                        <option value="second">2 Bedrooms</option>
                        <option value="third">3 Bedrooms</option>
                        <option value="fourth">3+ Bedrooms</option>
                    </StyledFormSelect>

                    <StyledFormSelect>
                        <option value="first">Any Price</option>
                        <option value="second">**Min/Max here**</option>
                    </StyledFormSelect>

                    <StyledFormSelect>
                        <option value="first">All Unit Styles</option>
                        <option value="second">Some Unit Styles?</option>
                        <option value="third" disabled>
                            This option is disabled.
                        </option>
                    </StyledFormSelect>

                    <StyledFormSelect>
                        <option value="first">Pets allowed</option>
                        <option value="second">Dogs allowed</option>
                        <option value="second">Cats allowed</option>
                    </StyledFormSelect>

            </Row>

            <Row>
                <h1>Apartments and Homes in {props.myInput}</h1>
                <h2>{props.rentals[0].numberOfRentals} apartments currently available. </h2>
            </Row>

            <Row>
                <Col>
                    <StyledRentalCard>
                        <CardImg src={props.rentals[0].photos[0].href} style={{ maxWidth: '100%', height: '12em'}} />

                        <CardBody>
                            <CardTitle>${props.rentals[0].price_min}/mo</CardTitle>
                                <p>[icon] {props.rentals[0].beds_max} beds   [icon] {props.rentals[0].baths_max} bath(s) </p>
                                <p>{props.rentals[0].address}</p>
                            <Button href={props.rentals[0].link} >Contact Now &rarr;</Button>
                        </CardBody>

                    </StyledRentalCard>
                </Col>

                <Col>
                    <StyledRentalCard>
                        <CardImg src={props.rentals[1].photos[0].href} style={{ maxWidth: '100%', height: '12em'}} />

                        <CardBody>
                            <CardTitle>${props.rentals[1].price_min}/mo</CardTitle>
                                <p>[icon] {props.rentals[1].beds_max} beds   [icon] {props.rentals[1].baths_max} bath(s) </p>
                                <p>{props.rentals[1].address}</p>                                                           
                            <Button href={props.rentals[1].link} >Contact Now &rarr;</Button>
                        </CardBody>

                    </StyledRentalCard>
                </Col>
            </Row>

            <Row>
                <Col>
                    <StyledRentalCard>
                        <CardImg src={props.rentals[2].photos[0].href} style={{ maxWidth: '100%', height: '12em'}} />

                        <CardBody>
                            <CardTitle>${props.rentals[2].price_min}/mo</CardTitle>
                                <p>[icon] {props.rentals[2].beds_max} beds   [icon] {props.rentals[2].baths_max} bath(s) </p>
                                <p>{props.rentals[2].address}</p>                                
                            <Button href={props.rentals[2].link}>Contact Now &rarr;</Button>
                        </CardBody>

                    </StyledRentalCard>
                </Col>

                <Col>
                    <StyledRentalCard>
                        <CardImg src={props.rentals[3].photos[0].href} style={{ maxWidth: '100%', height: '12em'}} />

                        <CardBody>
                            <CardTitle>${props.rentals[3].price_min}/mo</CardTitle>
                                <p>[icon] {props.rentals[3].beds_max} beds   [icon] {props.rentals[3].baths_max} bath(s) </p>
                                <p>{props.rentals[3].address}</p>                                
                            <Button href={props.rentals[3].link} >Contact Now &rarr;</Button>
                        </CardBody>

                    </StyledRentalCard>
                </Col>
            </Row>




      </StyledCardContainer>
        
        
         

  );
}

export default CardContainer;
