import { FETCH_CURRENT_USER } from '../actions'

export default (state = null, { payload, type }) => {
  switch (type) {
    case FETCH_CURRENT_USER:
      return payload || false
    default:
      return state
  }
}
