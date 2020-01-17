import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './app.css'
import About from '../about'
import Main from '../main'
import Navbar from '../navbar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="app" data-test="app-component">
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
