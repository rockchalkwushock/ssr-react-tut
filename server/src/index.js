import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'

import Routes from './client/Routes'
import { reduxStore, renderer } from './helpers'

const app = express()

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)
app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = reduxStore(req)
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })
  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.url) {
      return res.redirect(301, context.url)
    }
    if (context.notFound) {
      res.status(404)
    }
    res.send(renderer(req, store))
  })
})

app.listen(3000, err => {
  if (err) console.error('ERROR', err)
  console.log('App listening on port 3000!')
})
