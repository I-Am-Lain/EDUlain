import React, { Component } from 'react'

export default class ToDoForm extends Component {

    state = {
        name: '',
        priority: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className='form' onSubmit={(e) => this.props.handleSubmit(e, this.state)} >
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                <br/>
                <input type='text' name='priority' value={this.state.priority} onChange={this.handleChange}/>
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}
