import { useState } from 'react'

import './new-task-form.css'

function NewTaskForm ({ addItem }) {
  const [label, setLabel] = useState('')
  const placeholderSearchText = 'What needs to be done?'
  const onLabelChange = (e) => {
    e.preventDefault()
    setLabel(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addItem(label)
    setLabel('')
  }
  return (
    <form className="new-task__container" onSubmit={onSubmit}>
      <input
        type="text"
        className="new-task__input"
        placeholder={placeholderSearchText}
        onChange={onLabelChange}
        value={label}
      />
    </form>
  )
}

export default NewTaskForm
