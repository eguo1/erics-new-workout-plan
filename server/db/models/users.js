'use strict'

const db = require('../index')
const Sequelize = require('sequelize')

const defaultRoutine = {
  1: ['chest'],
  2: ['back', 'biceps'],
  3: ['shoulders', 'triceps'],
  4: ['legs', 'core']
}

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  routine: {
    type: Sequelize.JSON,
    defaultValue: JSON.stringify(defaultRoutine)
  }
})

module.exports = User
