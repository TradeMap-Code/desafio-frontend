import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
    </BrowserRouter>
  )
}

export default Routes
