import React from 'react'

import AppHeader from '../app-header'
import TaskList from '../task-list'
import Footer from '../footer'

import './todo-app.css'

export default class TodoApp extends React.Component {
  static defaultProps = {}

  static propTypes = {}

  maxId = 1

  state = {
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ],
    activeFilter: '',
  }

  filterAll = () => {
    this.setState({
      activeFilter: 'all',
    })
  }

  filterActive = () => {
    this.setState({
      activeFilter: 'active',
    })
  }

  filterCompleted = () => {
    this.setState({
      activeFilter: 'completed',
    })
  }

  filterTask = (tasks, activeFilter) => {
    switch (activeFilter) {
    case 'completed':
      return tasks.filter((elem) => elem.done)
    case 'active':
      return tasks.filter((elem) => !elem.done)
    default:
      return tasks
    }
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'done'),
    }))
  }

  onToggleEdit = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'editing'),
    }))
  }

  onLabelChange = (arr, id, e, text) => {
    const inx = arr.findIndex((elem) => elem.id === id)
    const oldItem = arr[inx]
    const newItem = { ...oldItem, name: text }
    const newArr = [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]

    this.setState(() => ({
      todoData: newArr,
    }))
  }

  addItem = (text = 'NEW') => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const inx = todoData.findIndex((elem) => elem.id === id)

      const newArr = [...todoData.slice(0, inx), ...todoData.slice(inx + 1)]

      return {
        todoData: newArr,
      }
    })
  }

  deleteAllItems = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((elem) => elem.done !== true),
    }))
  }

  toggleProperty(arr, id, propName) {
    const inx = arr.findIndex((elem) => elem.id === id)
    const oldItem = arr[inx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]
  }

  createTodoItem(label) {
    return {
      name: label,
      done: false,
      editing: false,
      id: this.maxId++,
    }
  }

  render() {
    const { todoData, activeFilter } = this.state
    const doneCount = todoData.filter((elem) => elem.done).length

    return (
      <section className="todoapp">
        <AppHeader addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={this.filterTask(todoData, activeFilter)}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleEdit={this.onToggleEdit}
            onLabelChange={this.onLabelChange}
          />
          <Footer
            doneCount={doneCount}
            delAllItems={this.deleteAllItems}
            filterActive={this.filterActive}
            filterCompleted={this.filterCompleted}
            filterAll={this.filterAll}
          />
        </section>
      </section>
    )
  }
}
