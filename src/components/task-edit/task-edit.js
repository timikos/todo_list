import React from 'react';
import PropTypes from 'prop-types';

import './task-edit.css';

export default class TaskEdit extends React.Component {
  static defaultProps = {
    todos: [],
    id: 1,
    onToggleEdit: () => {},
    onLabelChange: () => {},
  };

  static propTypes = {
    todos: PropTypes.array,
    id: PropTypes.number,
    onToggleEdit: PropTypes.func,
    onLabelChange: PropTypes.func,
  };

  state = {
    label: '',
  };

  tmpLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  }

  render() {
    const { id, todos, onToggleEdit, onLabelChange } = this.props;

    return (
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLabelChange(todos, id, e, this.state.label);
            onToggleEdit(id);
          }}
        >
          <input
            type="text"
            className="task-edit__input"
            onChange={(e) => {
              e.preventDefault();
              this.tmpLabelChange(e);
            }}
          />
        </form>
      </div>
    );
  }
}
