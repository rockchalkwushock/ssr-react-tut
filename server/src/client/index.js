// This is client-side only code.
import React from 'react'
import { hydrate } from 'react-dom'

import { Home } from './components'

hydrate(<Home />, document.querySelector('#root'))
