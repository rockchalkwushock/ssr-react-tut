import React from 'react'
import { Route } from 'react-router-dom'

import { Home } from './components'

export default () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
)
