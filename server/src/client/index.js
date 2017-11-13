// This is client-side only code.
import 'babel-polyfill'
import React from 'react'
import axios from 'axios'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'

import Routes from './Routes'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
)

hydrate(<App />, document.querySelector('#root'))
