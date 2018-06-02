'use strict'

import axios from 'axios'

export const GET_EXERCISES = 'GET_EXERCISES'
const SELECT_EXERCISE = 'SELECT_EXERCISE'

function getExercises (exercises) {
  return {
    type: GET_EXERCISES,
    exercises
  }
}

export function fetchAllExercises () {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/exercises')
      dispatch(getExercises(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export function fetchExerciseByGroup (groupName) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/exercises/group/${groupName}`)
      dispatch(getExercises(data))
    } catch (err) {
      console.error(err)
    }
  }
}
