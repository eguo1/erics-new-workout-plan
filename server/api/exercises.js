'use strict'

const router = require('express').Router()
const { Exercise, Muscle } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  const exercises = await Exercise.findAll().catch(next)
  res.json(exercises)
})

router.get('/:exerciseId', async (req, res, next) => {
  const exerciseId = +req.params.exerciseId
  const exercise = await Exercise.findOne({
    where: { id: exerciseId },
    include: [ Muscle ]
  }).catch(next)
  res.json(exercise)
})
