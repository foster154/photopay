import { API_URL } from './../constants.js'
import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types'

export function signinUser ({ email, password }) {
  // reduxThunk gives us the ability to do this...
  // allows us to dispatch multiple actions from a single action creator
  return function (dispatch) {
    // Submit email/password to server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // request is good...
        // - Update redux state to indicate user is authenticated
        dispatch({ type: AUTH_USER })  // this is like using the normal, vanilla action creator/action
        // - Save the JWT token
        window.localStorage.setItem('token', response.data.token)
        // - redirect to the route '/invoices'
        browserHistory.push('/invoices')
      })
      .catch(() => {
        // request is bad...
        // - show an error to the user
        dispatch(authError('Incorrect email/password. Please try again.'))
      })
  }
}

export function signupUser ({ email, password }) {
  return function (dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER })
      window.localStorage.setItem('token', response.data.token)
      browserHistory.push('/invoices')
    })
    .catch(error => {
      dispatch(authError(error.response.data.error))
    })
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser () {
  window.localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}
