import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import MapContainer from './MapContainer'


class HousingModal extends React.Component {


    handleClick = () => {
        console.log('not yet :)')
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
                <Button variant="success" onClick={this.handleClick} >Search</Button>
                <Button variant="danger" onClick={this.props.onHide} >Go Back</Button>
                <MapContainer />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        )
    }

}

export default HousingModal