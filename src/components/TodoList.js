import React, { Component } from 'react'
import AddTodo from './AddTodo'
import '../App.css'

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        todos : JSON.parse(localStorage.getItem('Todos')) || [],
        }
    }

    addTodo = () => {
        const newTodo = {
            'id': Date.now(),
            'todoName': "",
            'iscompleted': false,
            'showInputField': true
        };

        this.state.todos.push(newTodo);
        this.updateTodo(this.state.todos)
        this.updateLocalStorage(this.state.todos)

    }

    handleChange = (e) => {
        const todos = [...this.state.todos]
        todos[e.target.dataset.id][e.target.name] = e.target.value;
        todos[e.target.dataset.id]['showInputField'] = false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todos = this.state.todos;

        this.updateTodo(todos);
        this.updateLocalStorage(todos)        
    }

    deleteTodo(todo) {
        const todos = this.state.todos.filter(r => r !== todo);
        this.updateTodo(todos);
        this.updateLocalStorage(todos);
    }

    handleCheckbox(todo) {
        const  todos  = this.state.todos;
        const todoIndex = this.state.todos.findIndex(r => r === todo);
        
        if(todos[todoIndex].todoName.trim() !== "") {
            if (!todos[todoIndex].iscompleted) {
                todos[todoIndex].iscompleted = true;
            } else if (todos[todoIndex].iscompleted) {
                todos[todoIndex].iscompleted = false;
            }
        } else{
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
        let { todos } = this.state
        return (
            <div>
                <div className="add-todo">
                    <h2>Todo</h2>
                    <button onClick={this.addTodo}>
                        <i className="fa fa-plus" aria-hidden="true" style={{color : '#fff'}}></i>
                    </button>
                </div>
                <table>
                    <tbody>
                    <AddTodo 
                        add={this.addTodo} 
                        delete={this.deleteTodo.bind(this)}
                        handleCheckbox={this.handleCheckbox.bind(this)} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit} 
                        todos={todos} 
                    />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList
