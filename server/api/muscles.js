'use strict'

const router = require('express').Router()
const { Exercise, Muscle } = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  const muscles = await Muscle.findAll().catch(next)
  res.json(muscles)
})

router.get('/:muscleId', async (req, res, next) => {
  const muscleId = +req.params.muscleId
  const muscle = await Muscle.findOne({
    where: { id: muscleId },
    include: [ Exercise ]
  }).catch(next)
  res.json(muscle)
})

router.get('/group/:groupName', async (req, res, next) => {
  const { groupName } = req.params
  const muscleGroup = await Muscle.findAll({
    where: { 'muscle-group': groupName },
    include: [ Exercise ]
  }).catch(next)
  res.json(muscleGroup)
})
