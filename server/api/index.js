'use strict'

const router = require('express').Router()

router.use((req, res, next) => {
  const err = new Error('Can\'t find anything.')
  err.status = 404
  next(err)
})

module.exports = router
