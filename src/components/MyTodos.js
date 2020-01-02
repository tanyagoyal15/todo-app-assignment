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
                <div className="todos">
                    <div>Total Todos : {this.props.todos.length}</div>
                    <div>Todos Yet to be completed : {this.props.todos.filter(todo => !todo.iscompleted).length}</div>
                </div>
            </div>
        )
    }
}

export default MyTodos
