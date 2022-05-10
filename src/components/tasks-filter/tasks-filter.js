import React from 'react';
import PropTypes from "prop-types";

import './tasks-filter.css'

const TasksFilter = ({ filterActive,
                     filterCompleted,
                     filterAll }) => {

    return (
        <ul className="filters">
            <li>
                <button className="selected"
                        onClick={filterAll}
                >All
                </button>
            </li>
            <li>
                <button
                    onClick={filterActive}
                >Active
                </button>
            </li>
            <li>
                <button
                    onClick={filterCompleted}
                >Completed
                </button>
            </li>
        </ul>
    );
};

TasksFilter.defaultProps = {
    filterActive: () => {},
    filterCompleted: () => {},
    filterAll: () => {},
}

TasksFilter.propTypes = {
    filterActive: PropTypes.func,
    filterCompleted: PropTypes.func,
    filterAll: PropTypes.func,
}

export default TasksFilter