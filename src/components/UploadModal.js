import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const UploadModal = (props) => (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                Upload your tax documents
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.File 
                id="custom-file"
                label="Custom file input"
                custom
            />
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
)

export default UploadModal