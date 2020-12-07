import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

export default class ToDoContainer extends Component {

    state = {
        todos: ['abc', 'def', 'gef', 'hij', 'klm', 'nop', 'qrs', 'tuv', 'wxyz']
    }

    // componentDidMount(){
    //     fetch('http://localhost:3001')
    //     .then(resp => resp.json())
    //     .then(json => console.log(json))
    // }

    handleSubmit = (e, todo) => {
        e.preventDefault()
        console.log(todo)

        fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        .then(resp => resp.json())
        .then(json => 
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, json]
                }
            })
        )
    }

    render() {
        return (
            <div className='ToDoContainer'>
                <ToDoList todos={this.state.todos} />
                <ToDoForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
