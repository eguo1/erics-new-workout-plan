'use strict'

const db = require('../index')
const Muscle = require('./muscles')
const Exercise = require('./exercises')
const User = require('./users')

module.exports = {
  db, Muscle, Exercise, User
}
