import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAdmins } from '../actions'
import { requireAuth } from '../components'

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }
  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }
  render() {
    return (
      <div>
        Here is a big list of adimns:
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

export default {
  component: connect(state => ({ admins: state.admins }), { fetchAdmins })(
    requireAuth(AdminsList)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
