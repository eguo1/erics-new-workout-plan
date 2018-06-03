'use strict'

import axios from 'axios'

export const GET_EXERCISES = 'GET_EXERCISES'
export const GET_MUSCLES = 'GET_MUSCLES'
const SELECT_EXERCISE = 'SELECT_EXERCISE'

function getExercises (exercises) {
  return {
    type: GET_EXERCISES,
    exercises
  }
}

function getMuscles (muscles) {
  return {
    type: GET_MUSCLES,
    muscles
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

export function fetchExercisesByGroup (groupName) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/exercises/group/${groupName}`)
      dispatch(getExercises(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export function fetchMusclesByGroup (groupName) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/muscles/group/${groupName}`)
      dispatch(getMuscles(data))
    } catch (err) {
      console.error(err)
    }
  }
}
