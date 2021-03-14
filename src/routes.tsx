import React, { ReactElement } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import List from './pages/List'
import Favorites from './pages/Favorites'

function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Route path="/" component={List} exact />
      <Route path="/favorites" component={Favorites} />
    </BrowserRouter>
  )
}

export default Routes
