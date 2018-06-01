'use strict'

const { db } = require('./server/db/models')
const app = require('./server')
const PORT = 3030

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`
    
        Server listening on port ${PORT}
    
        http://localhost:${PORT}
    
      `)
    })
  })
