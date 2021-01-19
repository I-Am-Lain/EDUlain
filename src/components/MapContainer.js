import React from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Button from 'react-bootstrap/Button'


// const displayMarkers = (rentals) => {
//     return rentals.map((pro, index) => {
//         return <Marker key={index} id={index} position={{
//         lat: pro.lat,
//         lng: pro.lon
//         }}
//         onClick={() => console.log("You clicked me!")} />
//     })
//     }


    // <Map
    // google={props.google}
    // style={mapStyles}
    // center={{
    //   lat: 40.854885,
    //   lng: -88.081807
    // }}
    // zoom={5}
    // onClick={this.onMapClicked}
    // />

// const handleClick = (setNewCenter) => {
//     setNewCenter({ lat: 42.2808, lng: -83.7430})
// }


const MapContainer = (props) => {

    // const [newCenter, setNewCenter] = useState(null)
    // const [addresses, setAddresses] = useState([{ lat: 42.2808, lng: -83.7430}])
    


    return(
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: props.rentals[0].lat, lng: props.rentals[0].lng}} // will probably have to change this for re-searching
                onClick={() => console.log(props)}
                // center={props.center}
            >



                {
                    props.rentals.map((pro, index) => {
                        return <Marker key={index} id={index} position={{
                        lat: pro.lat,
                        lng: pro.lng
                        }}
                        onClick={() => alert(`I'm at ${pro.address} for $${pro.price_min}/month!!`)} />
                    })
                }
                {/* <Button variant="warning" onClick={() => {alert('foo')}} >LET'S GO</Button> */}
            
            
            
            </Map>
        
    )
    
}


// margin: auto was really messing me up here earlier
const mapStyles = {
    height: '100%',
    width: '65%',
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(MapContainer);