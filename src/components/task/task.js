import PropTypes from 'prop-types'

import CreatedTimeForTask from '../created-time-for-task'

import './task.css'

function Task ({
  name, done,
  editing, onDeleted,
  onToggleDone, onToggleEdit,
}) {
  let classNameContainer = ''
  if (editing) {
    classNameContainer += ' task_hidden'
  }
  if (done) {
    classNameContainer += ' task_completed'
  }
  return (
    <div className={classNameContainer}>
      <input className="radio-button__toggle" />
      <label onClick={onToggleDone} className="task__label">
        <span className="task__description">{name}</span>
        <CreatedTimeForTask />
      </label>
      <button className="icon icon-edit" onClick={onToggleEdit} />
      <button className="icon icon-destroy" onClick={onDeleted} />
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
