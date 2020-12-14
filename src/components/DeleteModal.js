import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";

class DeleteModal extends React.Component {

    handleClick = () => {
        console.log('foo')
    
        fetch(`https://edu-lain-api.herokuapp.com/api/v1/users/${this.props.auth.id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(json => 
            this.props.history.push('/')
        )
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
                    THIS WILL PERMANENTLY DELETE YOUR ACCOUNT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h4>Are you sure?</h4>
            <Button variant="success" onClick={this.handleClick} >Yep! Bye.</Button>
            <Button variant="danger" onClick={this.props.onHide} >Wait I messed up, baby</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        )
    }

}

export default withRouter(DeleteModal)