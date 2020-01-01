import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : " "
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: Date.now(),
            text : this.state.text,
            iscompleted : false,
        });
        this.setState({
            text : ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.text} onChange={this.handleChange} placeholder="Add todo..." />
            </form>
        )
    }
}

export default AddTodo