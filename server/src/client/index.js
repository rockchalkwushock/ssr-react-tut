// This is client-side only code.
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Routes from './Routes'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)

hydrate(<App />, document.querySelector('#root'))
