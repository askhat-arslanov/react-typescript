import React from 'react'

import './todo-list.css'
import { ITodo } from '../../interfaces'

interface ITodoListProps {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = ({ todos, onToggle, onRemove }) => {

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault()
    onRemove(id)
  }

  return (
    <ul className="todo-list">
      {todos.map(({ completed, id, title }) => (
        <li className="todo" key={id}>
          <label>
            <span
              className={`todo-title ${completed ? 'completed' : ''}`}
              onClick={() => onToggle(id)}
            >
              {title}
            </span>
            &nbsp;
            <button onClick={e => removeHandler(e, id)}>x</button>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
