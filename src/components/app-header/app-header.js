import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from "../new-task-form";
import './app-header.css';

const AppHeader = ({ addItem }) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm addItem={addItem}/>
        </header>
    );
};

AppHeader.defaultProps = {
    addItem: () => {}
}

AppHeader.propTypes = {
    addItem: PropTypes.func
}

export default AppHeader