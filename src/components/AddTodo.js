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
                            {props.todos.iscompleted ? (
                                <div>
                                    <input type="checkbox" onClick={(() => props.handleCheckbox(val))} checked />
                                    <input type="text" name="todoName" data-id={idx} id={todoName} onChange={props.handleChange} className="form-control" />  <span style={{ textDecoration: 'line-through !important' , color : 'yellow' }} >{val.todoName}</span>
                                    <i class="fa fa-times" onClick={(() => props.delete(val))} style={{ color: 'red' }}></i>
                                </div>
                                ) : (
                                    <div>
                                        <input type="checkbox" onClick={(() => props.handleCheckbox(val))} />
                                        <input type="text" name="todoName" data-id={idx} id={todoName} onChange={props.handleChange} className="form-control" /> <span>{val.todoName}</span> 
                                        <i class="fa fa-times" onClick={(() => props.delete(val))} style={{ color: 'red' , position : "absolute" , right : "5%"}}></i>
                                    </div>                                
                                )}
                        </form>
                    </td>
                </tr>
            )
        })
    )
}
export default AddTodo