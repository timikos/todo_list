import PropTypes from 'prop-types'

import CreatedTimeForTask from '../created-time-for-task'
import TimerContainer from '../timer-container'

import './task.css'

function Task ({
  name, done, timerMinutes, timerSeconds,
  editing, onDeleted,
  onToggleDone, onToggleEdit,
}) {
  let classNameContainer = 'view'
  let checked = false
  if (editing) {
    classNameContainer += ' task_hidden'
  }
  if (done) {
    classNameContainer += ' task_completed'
    checked = true
  }

  const onHandleChange = () => {
  }
  return (
    <div
      className={classNameContainer}
    >
      <input
        type="checkbox"
        onClick={onToggleDone}
        onChange={onHandleChange}
        onKeyDown={() => {}}
        className="radio-button__toggle"
        checked={checked}
      />
      <label
        role="presentation"
        className="task__label"
      >
        <span className="task__title">{name}</span>
        <TimerContainer
          timerMin={timerMinutes}
          timerSec={timerSeconds}
        />

        <CreatedTimeForTask />
      </label>
      <button
        className="icon icon-edit"
        onClick={onToggleEdit}
        aria-label="edit"
      />
      <button
        className="icon icon-destroy"
        onClick={onDeleted}
        aria-label="delete"
      />
    </div>
  )
}

Task.defaultProps = {
  name: '',
  done: false,
  editing: false,
  onToggleEdit: () => {},
  onToggleDone: () => {},
  onDeleted: () => {},
}

Task.propTypes = {
  name: PropTypes.string,
  done: PropTypes.bool,
  editing: PropTypes.bool,
  onToggleEdit: PropTypes.func,
  onToggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
}

export default Task
