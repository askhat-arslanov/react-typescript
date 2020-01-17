import React, { useEffect, useState } from 'react'

import './main.css'
import TodoForm from '../todo-form'
import TodoList from '../todo-list'
import { ITodo } from '../../interfaces'

// Объявление метода глобального объекта (чтобы Typescript не ругался)
declare var confirm: (question: string) => boolean

const Main: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number): void => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    )
  }

  const removeHandler = (id: number): void => {
    const removeConfirm = confirm('Are you sure?')
    if (removeConfirm) setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  return (
    <div className="main">
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </div>
  )
}

export default Main
