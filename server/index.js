'use strict'

const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3030
const db = require('./db')

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`
    
        Server listening on port ${port}
    
        http://localhost:${port}
    
      `)
    })
  })
