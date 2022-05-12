import { useState } from 'react'

import AppHeader from '../app-header'
import TaskList from '../task-list'
import Footer from '../footer'

import './todo-app.css'

function TodoApp () {
  let maxId = 1

  const createTodoItem = (label) => ({
    name: label,
    done: false,
    editing: false,
    id: maxId++,
  })

  const [todoData, setElemTodo] = useState([
    createTodoItem('Completed task'),
    createTodoItem('Editing task'),
    createTodoItem('Active task'),
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

  const onLabelChange = (arr, id, e, text) => {
    const inx = arr.findIndex((elem) => elem.id === id)
    const oldItem = arr[inx]
    const newItem = { ...oldItem, name: text }
    const newArr = [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]
    console.log(newArr)
    setElemTodo(newArr)
  }

  const addItem = (text = 'NEW') => {
    const newItem = createTodoItem(text)
    setElemTodo(() => [...todoData, newItem])
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

// class TodoApp extends React.Component {
//   maxId = 1
//
//   state = {
//     todoData: [
//       this.createTodoItem('Completed task'),
//       this.createTodoItem('Editing task'),
//       this.createTodoItem('Active task'),
//     ],
//     activeFilter: '',
//   }
//
//   filterAll = () => {
//     this.setState({
//       activeFilter: 'all',
//     })
//   }
//
//   filterActive = () => {
//     this.setState({
//       activeFilter: 'active',
//     })
//   }
//
//   filterCompleted = () => {
//     this.setState({
//       activeFilter: 'completed',
//     })
//   }
//
//   filterTask = (tasks, activeFilter) => {
//     switch (activeFilter) {
//     case 'completed':
//       return tasks.filter((elem) => elem.done)
//     case 'active':
//       return tasks.filter((elem) => !elem.done)
//     default:
//       return tasks
//     }
//   }
//
//   onToggleDone = (id) => {
//     this.setState(({ todoData }) => ({
//       todoData: this.toggleProperty(todoData, id, 'done'),
//     }))
//   }
//
//   onToggleEdit = (id) => {
//     this.setState(({ todoData }) => ({
//       todoData: this.toggleProperty(todoData, id, 'editing'),
//     }))
//   }
//
//   onLabelChange = (arr, id, e, text) => {
//     const inx = arr.findIndex((elem) => elem.id === id)
//     const oldItem = arr[inx]
//     const newItem = { ...oldItem, name: text }
//     const newArr = [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]
//
//     this.setState(() => ({
//       todoData: newArr,
//     }))
//   }
//
//   addItem = (text = 'NEW') => {
//     const newItem = this.createTodoItem(text)
//
//     this.setState(({ todoData }) => {
//       const newArr = [...todoData, newItem]
//       return {
//         todoData: newArr,
//       }
//     })
//   }
//
//   deleteItem = (id) => {
//     this.setState(({ todoData }) => {
//       const inx = todoData.findIndex((elem) => elem.id === id)
//
//       const newArr = [...todoData.slice(0, inx), ...todoData.slice(inx + 1)]
//
//       return {
//         todoData: newArr,
//       }
//     })
//   }
//
//   deleteAllItems = () => {
//     this.setState(({ todoData }) => ({
//       todoData: todoData.filter((elem) => elem.done !== true),
//     }))
//   }
//
//   toggleProperty(arr, id, propName) {
//     const inx = arr.findIndex((elem) => elem.id === id)
//     const oldItem = arr[inx]
//     const newItem = { ...oldItem, [propName]: !oldItem[propName] }
//
//     return [...arr.slice(0, inx), newItem, ...arr.slice(inx + 1)]
//   }
//
//   createTodoItem(label) {
//     return {
//       name: label,
//       done: false,
//       editing: false,
//       id: this.maxId++,
//     }
//   }
//
//   render() {
//     const { todoData, activeFilter } = this.state
//     const doneCount = todoData.filter((elem) => elem.done).length
//
//     return (
//       <section className="todoapp">
//         <AppHeader addItem={this.addItem} />
//         <section className="main">
//           <TaskList
//             todos={this.filterTask(todoData, activeFilter)}
//             onDeleted={this.deleteItem}
//             onToggleDone={this.onToggleDone}
//             onToggleEdit={this.onToggleEdit}
//             onLabelChange={this.onLabelChange}
//             addItem={this.addItem}
//           />
//           <Footer
//             doneCount={doneCount}
//             delAllItems={this.deleteAllItems}
//             filterActive={this.filterActive}
//             filterCompleted={this.filterCompleted}
//             filterAll={this.filterAll}
//           />
//         </section>
//       </section>
//     )
//   }
// }

export default TodoApp
