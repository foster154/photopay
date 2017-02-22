import { API_URL } from './../constants.js'
import axios from 'axios'
import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER_START,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAIL,
  CREATE_CUSTOMER_RESET
} from './types'

export function fetchCustomers () {
  return function (dispatch) {
    axios.get(`${API_URL}/customers`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_CUSTOMERS,
        payload: response.data
      })
    })
  }
}

export function createCustomer ({customerName, email, contactFirstName, contactLastName, onCreateSuccess}) {
  return function (dispatch) {
    dispatch({ type: CREATE_CUSTOMER_START })
    axios.post(`${API_URL}/customers`, {customerName, email, contactFirstName, contactLastName}, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: CREATE_CUSTOMER_SUCCESS })
      onCreateSuccess()
      setTimeout(() => {
        dispatch(createCustomerReset())
      }, 3000)
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: CREATE_CUSTOMER_FAIL,
        payload: 'There was a problem creating the customer. Please try again.'
      })
    })
  }
}

export const createCustomerReset = () => {
  return ({ type: CREATE_CUSTOMER_RESET })
}
