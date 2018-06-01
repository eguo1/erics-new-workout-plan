'use strict'

const router = require('express').Router()

router.use('/exercises', require('./exercises'))
router.use('/muscles', require('./muscles'))

router.use((req, res, next) => {
  const err = new Error('Can\'t find anything.')
  err.status = 404
  next(err)
})

module.exports = router
