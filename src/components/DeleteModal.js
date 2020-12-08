import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const handleClick = () => {
    console.log('foo')
}

const DeleteModal = (props) => (
    <Modal
      {...props}
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
        <Button variant="success" onClick={props.onHide} >Yep! Bye.</Button>
        <Button variant="danger" onClick={handleClick} >Wait I messed up, baby</Button>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>

)

export default DeleteModal