import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './Login'
// import LoginCallback from './LoginCallback'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/login/callback">
          {/* <LoginCallback /> */}
        </Route>
      </Switch>
    </Router>
  )
}
export default App
