import React from 'react'

import './new-task-form.css'

export default class NewTaskForm extends React.Component {
  static defaultProps = {}

  static propTypes = {}

  state = {
    label: '',
  }

  placeholderSearchText = 'What needs to be done?'

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="new-task__container" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-task__input"
          placeholder={this.placeholderSearchText}
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    )
  }
}
