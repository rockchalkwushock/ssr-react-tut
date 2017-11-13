import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => (
  <nav>
    <div className="nav-wrapper">
      <Link className="brand-logo" to="/">
        React SSR
      </Link>
      <ul className="right">
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/admin">Admins</Link>
        </li>
        <li>
          {auth ? (
            <a href="/api/logout">Logout</a>
          ) : (
            <a href="/api/auth/google">Login</a>
          )}
        </li>
      </ul>
    </div>
  </nav>
)

export default connect(state => ({ auth: state.auth }))(Header)
