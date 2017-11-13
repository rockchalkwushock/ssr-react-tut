import React from 'react'

import App from './App'
import { Home, loadData, NotFound, UsersList } from './pages'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UsersList,
        path: '/users'
      },
      {
        ...NotFound
      }
    ]
  }
]
