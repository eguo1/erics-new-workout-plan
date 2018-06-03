'use strict'

const db = require('../index')
const Sequelize = require('sequelize')

const Muscle = db.define('muscle', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  'muscle-group': {
    type: Sequelize.ENUM('chest', 'back', 'shoulders', 'biceps', 'triceps', 'legs', 'core'),
    allowNull: false
  },
  ratio: {
    type: Sequelize.INTEGER
  }
})

module.exports = Muscle
