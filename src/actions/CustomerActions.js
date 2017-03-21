import { API_URL } from './../constants.js'
import axios from 'axios'
import { browserHistory } from 'react-router'
import { createNotification } from './NotificationActions'
import {
  FETCH_CUSTOMERS_START,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAIL,
  SAVE_CUSTOMER_START,
  SAVE_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_FAIL,
  CUSTOMER_STATUS_RESET,
  FETCH_CUSTOMER,
  CLEAR_CUSTOMER_FORM
} from './types'

export function fetchCustomers () {
  return function (dispatch) {
    dispatch({ type: FETCH_CUSTOMERS_START })
    axios.get(`${API_URL}/customers`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: response.data
      })
    })
    .catch(() => {
      dispatch({ type: FETCH_CUSTOMERS_FAIL })
    })
  }
}

export function fetchCustomer (id) {
  return function (dispatch) {
    axios.get(`${API_URL}/customers/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_CUSTOMER,
        payload: response.data
      })
    })
  }
}

export const customerStatusReset = () => {
  return ({ type: CUSTOMER_STATUS_RESET })
}

export const clearCustomerForm = () => {
  return ({ type: CLEAR_CUSTOMER_FORM })
}

export function createCustomer ({customerName, email, contactFirstName, contactLastName, onCreateSuccess}) {
  return function (dispatch) {
    dispatch({ type: SAVE_CUSTOMER_START })
    axios.post(`${API_URL}/customers`, {customerName, email, contactFirstName, contactLastName}, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: SAVE_CUSTOMER_SUCCESS })
      dispatch(createNotification({ message: 'Customer created successfully', color: 'green', displayTime: 3 }))

      // onCreateSuccess is used to route user, depending on where they are.
      // currently implemented in Customers page...
      // built to be flexible for future ability to create customer on Invoice form page
      onCreateSuccess()
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_CUSTOMER_FAIL })
      dispatch(createNotification({ message: 'Error creating customer, please try again.', color: 'red', displayTime: 4 }))
    })
  }
}

export function updateCustomer ({ id, customerName, email, contactFirstName, contactLastName, onSaveSuccess }) {
  return function (dispatch) {
    dispatch({ type: SAVE_CUSTOMER_START })
    axios.put(`${API_URL}/customers/${id}`, {customerName, email, contactFirstName, contactLastName}, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: SAVE_CUSTOMER_SUCCESS })
      dispatch(createNotification({ message: 'Customer saved successfully', color: 'green', displayTime: 3 }))
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_CUSTOMER_FAIL })
      dispatch(createNotification({ message: 'Error saving customer, please try again.', color: 'red', displayTime: 4 }))
    })
  }
}

export function deleteCustomer (id) {
  return function (dispatch) {
    axios.delete(`${API_URL}/customers/${id}`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: SAVE_CUSTOMER_SUCCESS })
      dispatch(createNotification({ message: 'Customer deleted successfully', color: 'green', displayTime: 3 }))
      browserHistory.push('/customers')
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_CUSTOMER_FAIL })
      dispatch(createNotification({ message: 'Error deleting customer, please try again.', color: 'red', displayTime: 4 }))
    })
  }
}
