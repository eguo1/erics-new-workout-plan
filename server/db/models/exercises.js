'use strict'

const db = require('../index')
const Sequelize = require('sequelize')

const Exercise = db.define('exercise', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  machine: {
    type: Sequelize.ARRAY(Sequelize.ENUM('dumbbell', 'barbell', 'cable', 'machine')),
    allowNull: false
  }
})

module.exports = Exercise
