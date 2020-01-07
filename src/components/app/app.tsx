import React from 'react'

import './app.css'
import Navbar from '../navbar'
import TodoForm from '../todo-form'

const App: React.FC = () => {
  return (
    <div className="app" data-test="app-component">
      <Navbar />
      <TodoForm />
    </div>
  )
}

export default App
