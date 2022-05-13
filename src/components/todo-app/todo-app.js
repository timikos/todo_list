import { useState } from 'react'

import AppHeader from '../app-header'
import TaskList from '../task-list'
import Footer from '../footer'

import './todo-app.css'

function TodoApp () {
  const createTodoItem = (label, num = 1) => ({
    name: label,
    done: false,
    editing: false,
    id: num,
  })

  const [todoData, setElemTodo] = useState([
    createTodoItem('Completed task', 1),
    createTodoItem('Editing task', 2),
    createTodoItem('Active task', 3),
  ])
  const [activeFilter, setFilter] = useState('')
  const doneCount = todoData.filter((elem) => elem.done).length

  const filterAll = () => {
    setFilter(() => 'all')
  }
  const filterActive = () => {
    setFilter(() => 'active')
  }
  const filterCompleted = () => {
    setFilter(() => 'completed')
  }
  const filterTask = (tasks, filter) => {
    switch (filter) {
    case 'completed':
      return tasks.filter((elem) => elem.done)
    case 'active':
      return tasks.filter((elem) => !elem.done)
    default:
      return tasks
    }
  }

  const toggleProperty = (arr, id, propName) => {
    const inx = arr.findIndex((elem) => elem.id === id)
    const oldItem = arr[inx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]
  }
  const onToggleDone = (id) => setElemTodo(() => toggleProperty(todoData, id, 'done'))
  const onToggleEdit = (id) => setElemTodo(() => toggleProperty(todoData, id, 'editing'))

  const onLabelChange = (arr, id, e, text, propName = 'editing') => {
    const inx = arr.findIndex((elem) => elem.id === id)
    const oldItem = arr[inx]
    const newItem = { ...oldItem, name: text, [propName]: !oldItem[propName] }
    const newArr = [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]
    setElemTodo(() => newArr)
  }

  const addItem = (text = 'NEW') => {
    const newItem = createTodoItem(text, todoData.length + 1)
    const newArr = [...todoData, newItem]
    setElemTodo(() => newArr)
  }
  const deleteItem = (id) => {
    setElemTodo(() => {
      const inx = todoData.findIndex((elem) => elem.id === id)
      return [...todoData.slice(0, inx), ...todoData.slice(inx + 1)]
    })
  }
  const deleteAllItems = () => {
    setElemTodo(() => todoData.filter((elem) => elem.done !== true))
  }

  return (
    <section className="todoapp">
      <AppHeader addItem={addItem} />
      <section className="main">
        <TaskList
          todos={filterTask(todoData, activeFilter)}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
          onToggleEdit={onToggleEdit}
          onLabelChange={onLabelChange}
          addItem={addItem}
        />
        <Footer
          doneCount={doneCount}
          delAllItems={deleteAllItems}
          filterActive={filterActive}
          filterCompleted={filterCompleted}
          filterAll={filterAll}
        />
      </section>
    </section>
  )
}

export default TodoApp
