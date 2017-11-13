// This is client-side only code.
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

hydrate(<App />, document.querySelector('#root'))
