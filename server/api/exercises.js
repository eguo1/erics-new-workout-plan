'use strict'

const router = require('express').Router()
const { Exercise } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  const exercises = await Exercise.findAll().catch(next)
  res.json(exercises)
})
