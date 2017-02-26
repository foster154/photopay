import { API_URL } from './../constants.js'
import axios from 'axios'
import { browserHistory } from 'react-router'
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
    dispatch({
      type: FETCH_CUSTOMERS_START,
      payload: { status: 'start' }
    })
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
      dispatch({
        type: SAVE_CUSTOMER_SUCCESS,
        payload: 'Customer created successfully'
      })
      onCreateSuccess()
      setTimeout(() => {
        dispatch(customerStatusReset())
      }, 3000)
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: SAVE_CUSTOMER_FAIL,
        payload: 'There was a problem creating the customer. Please try again.'
      })
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
      dispatch({
        type: SAVE_CUSTOMER_SUCCESS,
        payload: 'Customer saved successfully'
      })
      onSaveSuccess()
      setTimeout(() => {
        dispatch(customerStatusReset())
      }, 3000)
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: SAVE_CUSTOMER_FAIL,
        payload: 'There was a problem saving the customer. Please try again.'
      })
    })
  }
}

export function deleteCustomer (id) {
  return function (dispatch) {
    axios.delete(`${API_URL}/customers/${id}`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: SAVE_CUSTOMER_SUCCESS,
        payload: 'Customer deleted successfully'
      })
      browserHistory.push('/customers')
      setTimeout(() => {
        dispatch(customerStatusReset())
      }, 3000)
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: SAVE_CUSTOMER_FAIL,
        payload: 'There was a problem deleting the customer. Please try again.'
      })
    })
  }
}
