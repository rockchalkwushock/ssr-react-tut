import axios from 'axios'

axios.defaults.baseURL = 'http://react-ssr-api.herokuapp.com'

export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/users')
  console.log(res)
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
