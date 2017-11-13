import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        Here is a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

export default connect(state => ({ users: state.users }), { fetchUsers })(
  UsersList
)
