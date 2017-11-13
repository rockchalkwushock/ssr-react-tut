import { FETCH_USERS } from '../actions'

export default (state = [], { payload, type }) => {
  switch (type) {
    case FETCH_USERS:
      return payload.data
    default:
      return state
  }
}
