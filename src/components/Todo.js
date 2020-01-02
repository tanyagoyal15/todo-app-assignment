import React , {Component} from 'react'

export class Todo extends Component {
    render() {
        return (
            // {
            //     todos.map(todo => {
            //         return <Todo
            //             key={todo.id}
            //             toggleComplete={() => this.toggleComplete(todo.id)}
            //             onDelete={() => this.deleteTodo(todo.id)}
            //             todo={todo}
            //         />
            //     })
            // }
            <div style={{ display: 'flex' }} className="todo-item" >
                <div style={{
                    textDecoration: this.props.todo.iscompleted ? "line-through" : ""
                }} onClick={this.props.toggleComplete}>
                    <input type="checkbox"/>
                    {this.props.todo.text}
                </div>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Todo
