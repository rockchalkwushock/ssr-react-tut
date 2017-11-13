import 'babel-polyfill'
import express from 'express'

import { reduxStore, renderer } from './helpers'

const app = express()

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = reduxStore()
  res.send(renderer(req, store))
})

app.listen(3000, err => {
  if (err) console.error('ERROR', err)
  console.log('App listening on port 3000!')
})
