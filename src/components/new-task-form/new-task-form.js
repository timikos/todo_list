import { useState } from 'react'

import './new-task-form.css'

function NewTaskForm ({ addItem }) {
  const [label, setLabel] = useState('')
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const placeholderSearchText = 'What needs to be done?'
  const onLabelChange = (e) => {
    e.preventDefault()
    setLabel(e.target.value)
  }
  const onMinChange = (e) => {
    e.preventDefault()
    setMin(e.target.value)
  }
  const onSecChange = (e) => {
    e.preventDefault()
    setSec(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addItem(label)
    setLabel('')
    // setMin(null)
    // setSec(0)
  }
  return (
    <form
      className="new-task__container"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="new-task__input"
        placeholder={placeholderSearchText}
        onChange={onLabelChange}
        value={label}

      />
      <input
        type="text"
        className="new-task__timer"
        placeholder="Min"
        onChange={onMinChange}
        value={min}
      />
      <input
        type="text"
        className="new-task__timer"
        placeholder="Sec"
        onChange={onSecChange}
        value={sec}
      />
    </form>
  )
}

export default NewTaskForm
