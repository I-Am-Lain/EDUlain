import React, { useState } from 'react'

import { Container, Card, CardBody, Button, InputGroup, InputGroupAddon } from "shards-react";
import styled from 'styled-components';

import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FormInput } from "shards-react";


import MapContainer from './MapContainer'

const StyledFundPage = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: url('https://www.nyhabitat.com/blog/wp-content/uploads/2015/11/NYC-fire-escape-apartment-buildings-low-rise-Manhattan.jpg') no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    
    position: absolute;
    top: 110px;
    border: 5px green solid;
    bottom: 0px;
    
`;

const StyledInputGroup = styled(InputGroup)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 40%;
    margin-top: 2em;
    margin-bottom: 2em;

`;

const StyledInput = styled(FormInput)`
    width: 40%;
    margin-bottom: 2em;
    font-size: 40px;

`;

const StyledButton = styled(Button)`
    font-size: 40px;
`;

const StyledFundCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    
    font-size: 22px;
    opacity: 80%;
`;



const Services = (props) => { 

    const [thing, setThing] = useState(false)
    const [text, setText] = useState('')
    // const [newCenter, setNewCenter] = useState(null)
    const [rentals, setRentals] = useState([{ lat: 42.2808, lng: -83.7430}])



    const handleClick = () => {
        fetch(`https://realtor.p.rapidapi.com/properties/v2/list-for-rent?city=${text.split(' ').join('%20')}&state_code=MI&limit=50&offset=0&sort=relevance`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
                "x-rapidapi-host": "realtor.p.rapidapi.com"
            }
        })
        .then(resp => resp.json())
        .then(json => {

            // console.log(json.properties.map(pro => {return {lat: pro.address.lat, lng: pro.address.lon}}))

            setRentals(json.properties.map(pro => {return {lat: pro.address.lat, lng: pro.address.lon}}))

            setThing(true)
        })
    }
    


  return (


    thing ?

    <MapContainer myInput={text} rentals={rentals} />
    :
    <StyledFundPage>

        <h1 style={{color: 'black', fontSize: '40px', marginTop: '3.5em'}}>Find Affordable Off-Campus Housing Today!</h1>

        <StyledInputGroup>
            <StyledInput placeholder="Enter a city (e.g. St. Louis)" onChange={val => setText(val.target.value)} />

            <InputGroupAddon type="append">
                <StyledButton theme="info" onClick={() => handleClick()} > 
                    <svg style={{height: '1em', color: 'white'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </StyledButton>
            </InputGroupAddon>
        </StyledInputGroup>

        <StyledFundCard> 
            <CardBody>
                EDUrain is committed to helping students find the perfect apartment, 
                home, or studio rental around your college campus in just minutes!
            </CardBody>
        </StyledFundCard>

    </StyledFundPage>
    )
};


export default Services