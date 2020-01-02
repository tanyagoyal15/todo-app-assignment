import React, { Component } from 'react'
import AddTodo from './AddTodo'
import '../App.css'

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem("Todos")) || [],
        }
    }

    addNewTodo = () => {
        this.setState({
            todos: [...this.state.todos, { id: Date.now(), todoName: "", iscompleted: false }],
        });
    }

    handleChange = (e) => {
        let todos = [...this.state.todos]
        todos[e.target.dataset.id][e.target.name] = e.target.value;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todos = this.state.todos;
        this.updateTodo(todos);
        this.updateLocalStorage(todos)
    }


    clickOnDelete(record) {
        const todos = this.state.todos.filter(r => r !== record);
        this.updateTodo(todos);
        this.updateLocalStorage(todos);
    }

    handleCheckbox(record) {
        const  todos  = this.state.todos;
        const todoIndex = this.state.todos.findIndex(r => r === record);
        if (!todos[todoIndex].iscompleted) {
            todos[todoIndex].iscompleted = true;
        } else if (todos[todoIndex].iscompleted) {
            todos[todoIndex].iscompleted = false;
        }

        this.updateTodo(todos);
        this.updateLocalStorage(todos);
    }

    updateTodo = todos => {
        this.setState({ todos });
    };

    updateLocalStorage = updatedTodos => {
        localStorage.setItem("Todos", JSON.stringify(updatedTodos));
    }

    render() {
        let todos = this.state.todos
        return (
            <div>
                <div className="add-todo">
                    <h2>Todo</h2>
                    <button onClick={this.addNewTodo}>
                        <i class="fa fa-plus" aria-hidden="true" style={{color : '#fff'}}></i>
                    </button>
                </div>
                <table>
                    <tbody>
                    <AddTodo 
                        add={this.addNewTodo} 
                        delete={this.clickOnDelete.bind(this)} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit} 
                        handleCheckbox={this.handleCheckbox.bind(this)}
                        todos={todos} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList
