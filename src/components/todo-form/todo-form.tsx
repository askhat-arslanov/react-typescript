import React, { useRef, useState } from 'react'

import './todo-form.css' 

interface ITodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<ITodoFormProps> = ({ onAdd }) => {
  const [country, setCountry] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCountry(value)
  }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // ! - для typescript. Так как он предполагает, что current может быть 
      // undefined или null, и обращение к value вызовет исключение.
      onAdd(inputRef.current!.value)
      setCountry('')
    }
  }

  return (
    <div>
      <form
        className="todo-form"
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <input
          className="todo-form__input"
          ref={inputRef}
          type="text"
          placeholder="Enter some"
          value={country}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
        />

        <button className="todo-form__btn" type="submit">
          Go
        </button>
      </form>
    </div>
  )
}

export default TodoForm
