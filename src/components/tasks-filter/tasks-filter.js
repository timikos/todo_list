import React from 'react';
import PropTypes from "prop-types";

import './tasks-filter.css'

export default class TasksFilter extends React.Component {
    static defaultProps = {
        filterActive: () => {},
        filterCompleted: () => {},
        filterAll: () => {}
    }

    static propTypes = {
        filterActive: PropTypes.func,
        filterCompleted: PropTypes.func,
        filterAll: PropTypes.func
    }

    render() {
        let classNameContainer = ""
        if (this.selected){
            classNameContainer += " filter_selected"
        }
        const { filterActive,
            filterCompleted,
            filterAll } = this.props
        return (

        <ul className="filters__container">
            <li key={1}>
                <button className={classNameContainer}
                        onClick={filterAll}
                >All
                </button>
            </li>
            <li key={2}>
                <button className={classNameContainer}
                        onClick={filterActive}
                >Active
                </button>
            </li>
            <li key={3}>
                <button className={classNameContainer}
                        onClick={filterCompleted}
                >Completed
                </button>
            </li>
        </ul>
    )}
}