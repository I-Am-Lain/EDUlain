import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class ToDoList extends Component {
    render() {
        return (
            <div className='ToDoList'>
                {
                    this.props.todos.map(todo => {
                        return <Card
                        header={todo}
                        meta='Friendddddd'
                        description=''
                      />
                    })
                }
            </div>
        )
    }
}
