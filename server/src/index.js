import express from 'express'

import renderer from './helpers'

const app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send(renderer())
})

app.listen(3000, err => {
  if (err) console.error('ERROR', err)
  console.log('App listening on port 3000!')
})