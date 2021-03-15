import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import MapContainer from './MapContainer'


class HousingModal extends React.Component {

    state = {
        addresses: [{lat: 47.359423, lon: -122.021071}, { lat: 42.2808, lng: -83.7430}],
        center: { lat: 42.2808, lng: -83.7430 }
    }

    render(){
        return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Housing API
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>Search a location for housing!</h2>
                <input type='text'/>
                <Button variant="success" onClick={() => {}} >Search</Button>
                <Button variant="danger" onClick={this.props.onHide} >Go Back</Button>
                <MapContainer addresses={this.state.addresses} center={this.state.center}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        )
    }

}

export default HousingModal