import { useState } from 'react'
import PropTypes from 'prop-types'

import './task-edit.css'

function TaskEdit ({
  id, todos,
  onToggleEdit, onLabelChange,
}) {
  const [label, setLabel] = useState('')

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onLabelChange(todos, id, e, label)
          onToggleEdit(id)
        }}
      >
        <input
          type="text"
          className="task-edit__input"
          onChange={(e) => {
            e.preventDefault()
            setLabel(e.target.value)
          }}
        />
      </form>
    </div>
  )
}

TaskEdit.defaultProps = {
  todos: [],
  id: 1,
  onToggleEdit: () => {},
  onLabelChange: () => {},
}

TaskEdit.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number,
  onToggleEdit: PropTypes.func,
  onLabelChange: PropTypes.func,
}

export default TaskEdit
