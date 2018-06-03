'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExercisesByGroup, fetchMusclesByGroup } from '../redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.fetchExercisesByGroup('chest')
    this.props.fetchMusclesByGroup('chest')
  }

  render () {
    return (
      <div>
        <h1>Fetch Exercises By Group</h1>
        <ul>
          {this.props.exercises.map(exercise => <li key={exercise.id}>{exercise.name}</li>)}
        </ul>
        <h1>Fetch Muscles By Group</h1>
        {this.props.muscles.map(muscle => {
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
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
    muscles: state.muscles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExercisesByGroup: muscleGroup => dispatch(fetchExercisesByGroup(muscleGroup)),
    fetchMusclesByGroup: muscleGroup => dispatch(fetchMusclesByGroup(muscleGroup))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
