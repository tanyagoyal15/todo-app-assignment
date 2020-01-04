
import React from "react"
import "../App.css";

const AddTodo = (props) => {
    return (
        props.todos.map((val, idx) => {
            let todoName = `todoName-${idx}`
            return (
                <tr key={val.id}>
                    <td>
                        <form onSubmit={props.handleSubmit}>
                            <div className="todo-row">
                                {val.showInputField ? (
                                    <div className="mytodo">
                                        <input type="checkbox" id={idx} onClick={(() => props.handleCheckbox(val))} disabled={true} />
                                        <input type="text" name="todoName" data-id={idx} id={todoName} onChange={props.handleChange} className="form-control input-todo" />
                                    </div>
                                ) : (
                                    <div className="mytodo">
                                        <input type="checkbox" id={idx} onClick={(() => props.handleCheckbox(val))} checked={val.iscompleted} />
                                        <span className="saved-todo">{val.todoName}</span>
                                    </div>
                                )}
                                <i className="fa fa-times" onClick={(() => props.delete(val))} style={{ color: 'red' }}></i>
                            </div>
                        </form>
                    </td>
                </tr>
            )
        })
    )
}
export default AddTodo