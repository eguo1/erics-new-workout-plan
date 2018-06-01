'use strict'

const { db, Muscle, Exercise } = require('../server/db/models')
const muscleData = require('./seed-data/muscles.json')
const exerciseData = require('./seed-data/exercises.json')

const seed = async () => {
  await db.sync({ force: true })
  await Promise.all(muscleData.map(mData => Muscle.create({...mData})))

  console.log(`
  
    Seeding of Muscles table successful!`)

  await Promise.all(exerciseData
    .map(async eData => {
      const { parentId, ...data } = eData
      await Exercise.create({...data})
        .then(async exercise => {
          if (parentId) {
            const parent = await Exercise.findById(+parentId)
            await exercise.setParent(parent)
          }
        })
    }))

  db.close()
  console.log(`
  
    Seeding of Exercises table successful!
  
  `)
}

seed().catch(error => {
  db.close()
  console.log(`
  
    Something unintended occurred:

    ${error.message}

    ${error.stack}

  `)
})
