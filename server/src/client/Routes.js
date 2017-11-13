import React from 'react'

import App from './App'
import { AdminsList, Home, loadData, NotFound, UsersList } from './pages'

// NOTE: You cannot list any routes after `NotFound` the array is indexed in order
// routes after `NotFound` will be routed to `NotFound` even though the views and
// and route exist.
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
        ...AdminsList,
        path: '/admins'
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
