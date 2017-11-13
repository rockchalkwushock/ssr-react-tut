import { FETCH_ADMINS } from '../actions'

export default (state = [], { payload, type }) => {
  switch (type) {
    case FETCH_ADMINS:
      return payload
    default:
      return state
  }
}
