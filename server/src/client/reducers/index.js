import { combineReducers } from 'redux'

import admins from './admins'
import auth from './auth'
import users from './users'

export default combineReducers({
  admins,
  auth,
  users
})
