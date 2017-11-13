import React from 'react'

import { Home, loadData, UsersList } from './pages'

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...UsersList,
    path: '/users'
  }
]
