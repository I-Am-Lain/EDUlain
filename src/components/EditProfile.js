import { connect } from 'react-redux'

import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class EditProfile extends React.Component{
  
    state = {
        birthday: '',
        gender: '',
        bio: '',
        photo: '',
        college: '',
        gpa: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleDateChange = (e) => {
        this.setState({
            birthday: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const editedUser = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        
        fetch(`http://localhost:4000/api/v1/users/${this.props.auth.id}`, editedUser)
        .then(resp => resp.json())
        .then(json => console.log(json))
    }

    render(){
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Profile
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>

                            <label for="birthday">Birthday:</label>
                            <input type="date" id="birthday" name="birthday" value={this.state.birthday} onChange={this.handleDateChange} />
                            
                            <Form.Control as="select" name='gender' size="lg" value={this.state.gender} onChange={this.handleChange} >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Other'>Other</option>
                                <option value='Nondisclosure'>I do not wish to disclose</option>
                            </Form.Control>
                            <br />
                            <Form.Control size="lg" type="text" placeholder="College of choice?" name='college' value={this.state.college} onChange={this.handleChange} />
                            <br />
                            <Form.Control size="lg" type="text" placeholder="GPA" name='gpa' value={this.state.gpa} onChange={this.handleChange} />

                            <Form.Label>Bio:</Form.Label>
                            <Form.Control as="textarea" rows={3} name='bio' value={this.state.bio} onChange={this.handleChange} />

                            <br />
                            <Form.Control size="lg" type="text" placeholder="Profile Picture URL?" name='photo' value={this.state.photo} onChange={this.handleChange} />
    
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    
                    </Form>
                </Modal.Body>
            

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }
    
}

export default connect(state => ({ auth: state.auth }))(EditProfile)