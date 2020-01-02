import React, { Component } from 'react'
import AddTodo from './AddTodo'
import MyTodos from './MyTodos'

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem("Todos")) || [],
            addNewTodo : false
        }
    }

    handleClick = () => {
        this.setState({ addNewTodo: true })
    }

    addTodo = todo => {
        this.setState({
            todos : [...this.state.todos , todo],
        })   
        localStorage.setItem("Todos", JSON.stringify([...this.state.todos, todo]));
    }

    toggleComplete = id => {
        const { todos } = this.state;
        const todoIndex = this.state.todos.findIndex(todo => todo.id === id);
        todos[todoIndex].iscompleted = true;
        this.updateTodo(todos);
        this.updateLocalStorage(todos);
    }


    deleteTodo = id => {
        const newList = this.state.todos.filter(todo => todo.id !== id);
        this.updateTodo(newList);
        this.updateLocalStorage(newList);
    };

    updateTodo = todos => {
        this.setState({ todos });
    };

    updateLocalStorage = updatedTodos => {
        localStorage.setItem("Todos", JSON.stringify(updatedTodos));
    }

    render() {
        let todos= this.state.todos;
        return (
            <div>
                <div className="add-todo">
                    <h2>Todo</h2>
                    <button onClick={this.handleClick}>Add Todo</button>
                </div>
                {this.state.addNewTodo ? (<AddTodo onSubmit={this.addTodo}/>) : null }
                <MyTodos todos={todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        )
    }
}

export default TodoList
