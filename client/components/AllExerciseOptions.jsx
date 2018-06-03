'use strict'

import React from 'react'

const AllExerciseOptions = (props) => {
  return (
    <div>
    <h1>{`${props.group} Exercises`}</h1>
        {props.muscles.map(muscle => {
          return (
            <div key={muscle.id}>
              <h2>{muscle.name}</h2>
              <p>Minimum exercises: {muscle.ratio}</p>
              <ul>
                {muscle.exercises.map(exercise => {
                  const multiMachines = exercise.machine.length > 1
                  return (
                    <li key={exercise.id}>{exercise.name}
                      {multiMachines ? (
                        <ul>
                          {exercise.machine.map(elem => {
                            return <li key={elem}>{elem}</li>
                          })}
                        </ul>
                      ) : ` - ${exercise.machine[0]}`}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default AllExerciseOptions
