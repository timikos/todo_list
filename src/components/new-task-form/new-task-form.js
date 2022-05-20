import { useState } from 'react'

import './new-task-form.css'

function NewTaskForm ({ addItem }) {
  const [label, setLabel] = useState('')
  const [sec, setSec] = useState('')
  const [min, setMin] = useState('')
  const onOptionChange = (setOption, e) => {
    e.preventDefault()
    setOption(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addItem(+min, +sec, label)
    setLabel('')
    setMin('')
    setSec('')
  }
  return (
    <form
      className="new-task__container"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="new-task__input"
        placeholder="What needs to be done?"
        onChange={onOptionChange.bind(this, setLabel)}
        value={label}
      />
      <input
        type="number"
        className="new-task__timer"
        placeholder="Min"
        onChange={onOptionChange.bind(this, setMin)}
        value={min}
      />
      <input
        type="number"
        className="new-task__timer"
        placeholder="Sec"
        onChange={onOptionChange.bind(this, setSec)}
        value={sec}
      />
      <input type="submit" style={{ display: 'none' }} />
    </form>
  )
}

export default NewTaskForm
