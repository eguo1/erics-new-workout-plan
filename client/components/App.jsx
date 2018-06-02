'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllExercises } from '../redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.fetchAllExercises()
  }
  
  render () {
    return (
      <div>
        <ul>
          {this.props.exercises.map(exercise => <li key={exercise.id}>{exercise.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllExercises: () => dispatch(fetchAllExercises())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
