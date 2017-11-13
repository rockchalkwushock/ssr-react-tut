import React from 'react'
import { Route } from 'react-router-dom'

import { Home, UsersList } from './components'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UsersList} />
  </div>
)
