import React, { useState } from 'react'

import { Container, Card, CardBody, Button, InputGroup, InputGroupAddon, FormInput } from "shards-react";
import styled from 'styled-components';

import MapContainer from './MapContainer'
import CardContainer from './CardContainer'


// Fund Splash Page Container
const StyledFundPage = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: url('https://images.adsttc.com/media/images/5cfe/f60b/284d/d191/4200/0370/slideshow/Night_view_at_the_terrace.jpg') no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    
    position: absolute;
    top: 110px;
    border: 5px green solid;
    bottom: 0px;
    font-family: "Poppins", Roboto Regular, serif;
`;

// Splash Page ENTIRE Search Bar
const StyledInputGroup = styled(InputGroup)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 48%;
    margin-top: 2em;
    margin-bottom: 2em;

    border: 4px gray solid;
    border-radius: .25em;

`;

// Just bar
const StyledInput = styled(FormInput)`
    font-size: 40px;

`;

// Just button
const StyledButton = styled(Button)`
    font-size: 40px;
    background-color: rgb(18, 100, 222);
`;


// Top and bottom cards................may want to change this later
const StyledFundCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    
    font-size: 22px;
    opacity: 80%;
    border-radius: .25em;
`;

/* this, or the @media container, has an inner padding of 15px on left and right sides.*/
const StyledMapPage = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    position: absolute;
    top: 110px;
    // border: 5px purple solid;
    bottom: 0px;
    
`;


const Services = (props) => { 

    const [thing, setThing] = useState(false)
    const [text, setText] = useState('')
    const [rentals, setRentals] = useState([{ lat: 42.2808, lng: -83.7430}])

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
            setThing(true)
        })
        .catch(e => {
            console.log(e)
            alert(e)
        })
    }

    const handleTestClick = () => {
        alert('Sorry, this feature cannot be made public quite yet :<')
    }
    
  return (
    
    thing ?
    <StyledMapPage>
        <CardContainer myInput={text} rentals={rentals} />
        <MapContainer myInput={text} rentals={rentals} />
    </StyledMapPage>
    :
    <StyledFundPage>
        
        <StyledFundCard style={{backgroundColor: 'black', opacity: '80%'}}> 
            <CardBody>
                <h1 style={{color: 'white', fontSize: '50px', fontWeight: 'bold', fontFamily: 'Poppins Bold'}} >Find Affordable Off-Campus Housing Today</h1>
            </CardBody>
        </StyledFundCard>
        

        <StyledInputGroup>
            <StyledInput placeholder="Enter a city (e.g. St. Louis)" onChange={val => setText(val.target.value)} />

            <InputGroupAddon type="append">
                <StyledButton theme="info" onClick={() => handleTestClick()} > 
                    <svg style={{height: '1em', color: 'white'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </StyledButton>
            </InputGroupAddon>
        </StyledInputGroup>

        <StyledFundCard style={{width: '40%'}}> 
            <CardBody>
                EDUrain is committed to helping students find the perfect apartment, 
                home, or studio rental around your college campus in just minutes!
            </CardBody>
        </StyledFundCard>

    </StyledFundPage>


    )
};


export default Services