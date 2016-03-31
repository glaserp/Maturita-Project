import { combineReducers } from 'redux'
import * as actions from './actions'

export default function ticketReducer(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_EVENTS_SUCCESS: {
      return Object.assign({}, state, {
        events: action.payload
      })
    }

    case actions.FETCH_HIGHLIGHT_SUCCESS: {
      return Object.assign({}, state, {
        highlight: action.payload
      })
    }
  }
  return state
}

