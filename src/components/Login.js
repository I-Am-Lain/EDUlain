import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/'


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const authThisUser = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        
        fetch('http://edu-lain-api.herokuapp.com/api/v1/auth', authThisUser)
        .then(resp => resp.json())
        .then(json => {
            if (json.error){
                this.setState({
                    error: json.error
                })
            } else {
                this.props.loginSuccess(json)
                this.props.history.push('/dashboard')
            }
        })


        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        return(
            <div className='login-container'>
                {
                    this.state.error ? 
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> 
                    : 
                    null
                }
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='...username'/>
                    <input type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='...password'/>                    

                    <button type='submit'>Log In</button>
                </form>
            </div>
        )
    }
}

export default connect(state => ({ auth: state.auth }), { loginSuccess })(Login)