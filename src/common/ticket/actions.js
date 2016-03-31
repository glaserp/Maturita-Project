import firebase from 'firebase'

export const ADD_TO_CART = 'ADD_TO_CART'
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'
export const FETCH_HIGHLIGHT = 'FETCH_HIGHLIGHT'
export const FETCH_HIGHLIGHT_SUCCESS = 'FETCH_HIGHLIGHT_SUCCESS'
export const FETCH_HIGHLIGHT_FAILURE = 'FETCH_HIGHLIGHT_FAILURE'

export function add_to_cart() {
  return {
    type: ADD_TO_CART
  }
}

export function fetch_events() {
  return ({ fetch }) => ({
    type: 'FETCH_EVENTS',
    payload: {
      promise: fetch('http://localhost:8000/api/v1/ticket/events')
        .then(response => response.json())
    }
  });
}

export function fetch_highlight() {
  return ({ fetch }) => ({
    type: 'FETCH_HIGHLIGHT',
    payload: {
      promise: fetch('http://localhost:8000/api/v1/ticket/highlight')
        .then(response => response.json())
    }
  });
}
