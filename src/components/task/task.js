import React from 'react';
import CreatedTimeForTask from "../created-time-for-task";
import PropTypes from "prop-types";

import './task.css'

export default class Task extends React.Component{

    static defaultProps = {
        name: "",
        done: false,
        editing: false,
        id: 1,
        onToggleEdit: () => {},
        onToggleDone: () => {},
        onDeleted: () => {},
    }

    static propTypes = {
        name: PropTypes.string,
        done: PropTypes.bool,
        editing: PropTypes.bool,
        id: PropTypes.number,
        onToggleEdit: PropTypes.func,
        onToggleDone: PropTypes.func,
        onDeleted: PropTypes.func,
    }

    render() {
        const { name, done,
            editing, id,
            onDeleted, onToggleDone,
            onToggleEdit,
           } = this.props;

        let classNameContainer = ""
        if (editing) {
            classNameContainer += " task_hidden"
        }
        if (done) {
            classNameContainer += " task_completed"
        }

        return (
            <li key={id}>
                <div className={classNameContainer}>
                    <input className="radio-button__toggle" />
                    <label
                    onClick={ onToggleDone }
                    className="task__label">
                        <span className="task__description">
                            {name}
                        </span>
                        <CreatedTimeForTask />
                    </label>
                    <button
                        className="icon icon-edit"
                        onClick={onToggleEdit}
                    >

                    </button>
                    <button
                        className="icon icon-destroy"
                        onClick={onDeleted}
                    >

                    </button>
                </div>
            </li>
        )
    }
}
