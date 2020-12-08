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
        
        fetch('http://localhost:4000/api/v1/auth', authThisUser)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.error){
                this.setState({
                    error: json.error
                })
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
                {this.state.error ? <h3 style={{color: 'red'}}>{this.state.error}</h3> : null}
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='...username'/>
                    <input type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='...password'/>                    

                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Login