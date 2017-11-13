import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }
  renderHead() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }
  render() {
    return (
      <div>
        {this.renderHead()}
        Here is a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  component: connect(state => ({ users: state.users }), { fetchUsers })(
    UsersList
  ),
  loadData
}
