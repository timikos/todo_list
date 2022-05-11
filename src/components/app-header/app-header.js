import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from "../new-task-form";
import './app-header.css';

const AppHeader = ({ addItem }) => {
    return (
        <header className="header__container">
            <h1 className="header__text">todos</h1>
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