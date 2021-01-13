import React from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Button from 'react-bootstrap/Button'


// let dataPoints = [{lat: 47.359423, lon: -122.021071},
//     {lat: 47.2052192687988, lon: -121.988426208496},
//     {lat: 47.6307081, lon: -122.1434325},
//     {lat: 47.3084488, lon: -122.2140121},
//     {lat: 47.5524695, lon: -122.0425407},
//     {lat: 38.530280, lon: -90.210310},
//     {lat: 38.430280, lon: -90.220310},
//     {lat: 38.330280, lon: -90.230310},
//     {lat: 38.230280, lon: -90.240310},
//     {lat: 38.130280, lon: -90.250310},
//     {lat: 42.2808, lon: -83.7430},
//     {lat: 41.8781, lon: -87.6298},
//     ]

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
                zoom={12}
                style={mapStyles}
                initialCenter={props.rentals[0]} // will probably have to change this for re-searching
                onClick={() => console.log(props)}
                // center={props.center}
            >



                {
                    props.rentals.map((pro, index) => {
                        return <Marker key={index} id={index} position={{
                        lat: pro.lat,
                        lng: pro.lng
                        }}
                        onClick={() => console.log("You clicked me!")} />
                    })
                }
                <Button variant="warning" onClick={() => {alert('foo')}} >LET'S GO</Button>
            
            
            
            </Map>
        
    )
    
}



const mapStyles = {
    height: '100%',
    width: '50%',
    margin: 'auto',
    marginRight: '27em', // this is not the greatest
};

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API_KEY
  })(MapContainer);