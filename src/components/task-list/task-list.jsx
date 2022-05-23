import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'
import TaskEdit from '../task-edit'

function TaskList ({
  todos,
  onToggleEdit,
  onToggleDone,
  onDeleted,
  onLabelChange,
  addItem,
}) {
  const elements = todos.map((elem) => {
    if (elem.editing) {
      return (
        <li key={elem.id}>
          <TaskEdit
            {...elem}
            todos={todos}
            onLabelChange={onLabelChange}
            addItem={addItem}
          />
        </li>
      )
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
    )
  })

  return <ul className="task-list__container">{elements}</ul>
}

TaskList.defaultProps = {
  todos: [],
  onToggleEdit: () => {},
  onToggleDone: () => {},
  onDeleted: () => {},
  onLabelChange: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  onToggleEdit: PropTypes.func,
  onToggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  onLabelChange: PropTypes.func,
}

export default TaskList
