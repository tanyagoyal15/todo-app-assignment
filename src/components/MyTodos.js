import React, { Component } from 'react'
import Todo from './Todo'

export class MyTodos extends Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                                key={todo.id}
                                toggleComplete={() => this.props.toggleComplete(todo.id)}
                                onDelete={() => this.props.deleteTodo(todo.id)}
                                todo={todo}
                            />
                    })
                }
            </div>
        )
    }
}

export default MyTodos
