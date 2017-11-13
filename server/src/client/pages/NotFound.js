import React from 'react'
// default to empty object because the prop is only available on server
const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h1>Oops, route not found!</h1>
}

export default {
  component: NotFound
}
