import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'

import Routes from './client/Routes'
import { reduxStore, renderer } from './helpers'

const app = express()

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = reduxStore()
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, err => {
  if (err) console.error('ERROR', err)
  console.log('App listening on port 3000!')
})
