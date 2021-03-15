import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button, FormSelect, FormInput, InputGroup, InputGroupAddon, FormCheckbox } from "shards-react";
import styled from 'styled-components';

import { FaBed, FaShower } from "react-icons/fa";
import { IconContext } from 'react-icons';

const StyledCardContainer = styled(Container)`
    // border: 5px blue solid;
    width: 35%;
    margin: 0;

    font-family: "Poppins", Roboto Regular, serif;
`;

const StyledRentalCard = styled(Card)`
    border: 2px grey solid;
    margin-top: .5em;
    font-size: 22px;

    border-radius: .5em;
`;

const StyledButton = styled(Button)`
    font-size: 32px;
    background-color: rgb(18, 100, 222);

`;

const StyledFormSelect = styled(FormSelect)`
    width: 8em;
    height: 3em;
    font-size: 22px;
    line-height: 1em;
    border: 2px #2282F6 solid;
    margin: .5em;

    border-radius: .25em;
`;

//SEARCH BAR BUTTON STUFF ABOVE CARDS
const StyledInputGroup = styled(InputGroup)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: .4em;
`;

//padding-right helps grow the search bar
const StyledInput = styled(FormInput)`
    margin-bottom: 2em;
    font-size: 32px;
    border-radius: .25em;
`;

const StyledContactButton = styled(Button)`
    font-size: 26px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    line-height: 2;
    border-radius: .4em;
`;

const StyledMoreSelect = styled(FormSelect)`
    height: 3em;
    font-size: 22px;
    line-height: 1em;
    border: 2px #2282F6 solid;
    margin-right: 3em;
`;

// The Radio Toggle..... def need to fix this later
const StyledFormCheckbox = styled(FormCheckbox)`
    font-size: 22px;
    line-height: 1em;
    // border: 2px #2282F6 solid;
`;

const CardContainer = (props) => {

    const [cheapToggle, setCheapToggle] = useState(false)

    return (
        <StyledCardContainer>
                <Row>
                    <StyledInputGroup>
                        <StyledInput style={{width: '17.5em'}} placeholder={props.myInput} onChange={() => {}} />

                        <InputGroupAddon type="append" style={{marginRight: '.5em'}}>
                            <StyledButton style={{borderRadius: '.15em'}} theme="info" onClick={() => {}} > 
                                <svg style={{height: '1em', color: 'white'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </StyledButton>
                        </InputGroupAddon>

                        <StyledMoreSelect style={{borderRadius: '.25em'}} >
                                <option value="first">More</option>
                                <option value="second">???</option>
                                <option value="third">uhh</option>
                        </StyledMoreSelect>
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
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                        <h3>
                            {props.rentals[0].numberOfRentals} apartments currently available.
                        </h3>
                        <StyledFormCheckbox
                            toggle
                            checked={cheapToggle}
                            onChange={() => setCheapToggle(!cheapToggle)}>
                            sort By Cheapest
                        </StyledFormCheckbox>
                    </div>


                </Row>

                <Row>
                    <Col>
                        <StyledRentalCard>
                            <CardImg src={props.rentals[0].photos[0].href} style={{ maxWidth: '100%', height: '13.5em'}} />

                            <CardBody>
                                <CardTitle style={{fontSize: '30px'}}><b>${props.rentals[0].price_min}/mo</b></CardTitle>
                                    <p><IconContext.Provider value={{size: '1.75em'}}><FaBed/></IconContext.Provider> {props.rentals[0].beds_max} bedrooms   
                                    <IconContext.Provider value={{ size: '1.5em', style: {marginLeft: '1em'} }}><FaShower/></IconContext.Provider> {props.rentals[0].baths_max} bath(s)</p>

                                    <p><i>{props.rentals[0].address}</i></p>
                                <StyledContactButton href={props.rentals[0].link} >Contact Now &rarr;</StyledContactButton>
                            </CardBody>

                        </StyledRentalCard>
                    </Col>

                    <Col>
                        <StyledRentalCard>
                            <CardImg src={props.rentals[1].photos[0].href} style={{ maxWidth: '100%', height: '13.5em'}} />

                            <CardBody>
                                <CardTitle style={{fontSize: '30px'}}><b>${props.rentals[1].price_min}/mo</b></CardTitle>
                                    <p><IconContext.Provider value={{size: '1.75em'}}><FaBed/></IconContext.Provider> {props.rentals[1].beds_max} bedrooms   
                                    <IconContext.Provider value={{ size: '1.5em', style: {marginLeft: '1em'} }}><FaShower/></IconContext.Provider> {props.rentals[1].baths_max} bath(s) </p>
                                    
                                    <p><i>{props.rentals[1].address}</i></p>                                                           
                                <StyledContactButton href={props.rentals[1].link} >Contact Now &rarr;</StyledContactButton>
                            </CardBody>

                        </StyledRentalCard>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <StyledRentalCard>
                            <CardImg src={props.rentals[2].photos[0].href} style={{ maxWidth: '100%', height: '13.5em'}} />

                            <CardBody>
                                <CardTitle style={{fontSize: '30px'}}><b>${props.rentals[2].price_min}/mo</b></CardTitle>
                                    <p><IconContext.Provider value={{size: '1.75em'}}><FaBed/></IconContext.Provider> {props.rentals[2].beds_max} bedrooms   
                                    <IconContext.Provider value={{ size: '1.5em', style: {marginLeft: '1em'} }}><FaShower/></IconContext.Provider> {props.rentals[2].baths_max} bath(s) </p>
                                    
                                    <p><i>{props.rentals[2].address}</i></p>                                
                                <StyledContactButton href={props.rentals[2].link}>Contact Now &rarr;</StyledContactButton>
                            </CardBody>

                        </StyledRentalCard>
                    </Col>

                    <Col>
                        <StyledRentalCard>
                            <CardImg src={props.rentals[3].photos[0].href} style={{ maxWidth: '100%', height: '13.5em'}} />

                            <CardBody>
                                <CardTitle style={{fontSize: '30px'}}><b>${props.rentals[3].price_min}/mo</b></CardTitle>
                                    <p><IconContext.Provider value={{size: '1.75em'}}><FaBed/></IconContext.Provider> {props.rentals[3].beds_max} bedrooms   
                                    <IconContext.Provider value={{ size: '1.5em', style: {marginLeft: '1em'} }}><FaShower/></IconContext.Provider> {props.rentals[3].baths_max} bath(s) </p>
                                    
                                    <p><i>{props.rentals[3].address}</i></p>                                
                                <StyledContactButton href={props.rentals[3].link} >Contact Now &rarr;</StyledContactButton>
                            </CardBody>

                        </StyledRentalCard>
                    </Col>
                </Row>
        </StyledCardContainer> 
    );
}

export default CardContainer;
