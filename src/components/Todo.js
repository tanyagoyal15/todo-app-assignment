import React , {Component} from 'react'

//MUI imports
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    icon: {
        borderRadius: 50,
        width: 16,
        height: 16,
        backgroundColor: "#fff",
    },
    checkedIcon: {
        backgroundColor: "#304ffe",
        borderRadius: 50,
        "&:before": {
            display: "block",
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""'
        },
    },
    deleteIcon : {
        color: '#d50000'
    }
};

export class Todo extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                {
                    this.props.todo.iscompleted ? (
                        <div className="todo-item">
                            <div onClick={this.props.toggleComplete} style={{textDecoration : 'line-through'}}>
                                <Checkbox
                                    defaultChecked
                                    value="uncontrolled"
                                    color="primary"
                                    icon={<span className={classes.icon} />}
                                    checkedIcon={<span className={classes.icon, classes.checkedIcon} />}
                                    inputProps={{ "aria-label": 'uncontrolled-checkbox' }} />
                                {this.props.todo.text}
                            </div>
                            <IconButton aria-label="delete" onClick={this.props.onDelete}>
                                <ClearIcon className={classes.deleteIcon} />
                            </IconButton>
                        </div>
                    ) : (
                            <div className="todo-item">
                                <div onClick={this.props.toggleComplete}>
                                    <Checkbox
                                        value="uncontrolled"
                                        color="primary"
                                        icon={<span className={classes.icon} />}
                                        checkedIcon={<span className={classes.icon, classes.checkedIcon} />}
                                        inputProps={{ "aria-label": 'uncontrolled-checkbox' }} />
                                    {this.props.todo.text}
                                </div>
                                <IconButton aria-label="delete" onClick={this.props.onDelete}>
                                    <ClearIcon className={classes.deleteIcon} />
                                </IconButton>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default withStyles(styles)(Todo)
