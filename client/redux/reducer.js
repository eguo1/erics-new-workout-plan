'use strict'

import { GET_EXERCISES, GET_MUSCLES } from './actions'

const initialState = {
  exercises: [],
  muscles: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return { ...state, exercises: action.exercises }
    case GET_MUSCLES:
      return { ...state, muscles: action.muscles }
    default:
      return state
  }
}

export default rootReducer
