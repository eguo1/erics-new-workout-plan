const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABSE_URL || 'postgres://localhost:5432/erics-workout-plan', {
  logging: false
})

module.exports = db
