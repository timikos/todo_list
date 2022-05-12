import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.css';
import TaskEdit from '../task-edit';

export default class TaskList extends React.Component {
  static defaultProps = {
    todos: [],
    onToggleEdit: () => {},
    onToggleDone: () => {},
    onDeleted: () => {},
    onLabelChange: () => {},
  };

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggleEdit: PropTypes.func,
    onToggleDone: PropTypes.func,
    onDeleted: PropTypes.func,
    onLabelChange: PropTypes.func,
  };

  render() {
    const { todos, onToggleEdit, onToggleDone, onDeleted, onLabelChange } = this.props;

    const elements = todos.map((elem) => {
      if (elem.editing) {
        return (
          <li key={elem.id}>
            <TaskEdit
              {...elem}
              todos={todos}
              onToggleEdit={() => onToggleEdit(elem.id)}
              onLabelChange={onLabelChange}
            />
          </li>
        );
      }
      return (
        <li key={elem.id}>
          <Task
            {...elem}
            onToggleDone={() => onToggleDone(elem.id)}
            onToggleEdit={() => onToggleEdit(elem.id)}
            onDeleted={() => onDeleted(elem.id)}
          />
        </li>
      );
    })

    return <ul className="task-list__container">{elements}</ul>;
  }
}
