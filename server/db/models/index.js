'use strict'

const db = require('../index')
const Muscle = require('./muscles')
const Exercise = require('./exercises')
const User = require('./users')

Muscle.hasMany(Exercise)
Exercise.belongsTo(Muscle)

Exercise.belongsTo(Exercise, { as: 'parent' })

module.exports = {
  db, Muscle, Exercise, User
}
