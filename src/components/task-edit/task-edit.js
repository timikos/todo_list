import { useState } from 'react'
import PropTypes from 'prop-types'

import './task-edit.css'

function TaskEdit ({
  id, todos,
  onLabelChange,
}) {
  const [label, setLabel] = useState('')

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onLabelChange(todos, id, e, label)
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
  onLabelChange: () => {},
}

TaskEdit.propTypes = {
  todos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  id: PropTypes.number,
  onLabelChange: PropTypes.func,
}

export default TaskEdit
