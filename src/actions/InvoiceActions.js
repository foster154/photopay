import { API_URL } from './../constants.js'
import axios from 'axios'
import { browserHistory } from 'react-router'
import { createNotification } from './NotificationActions'
import {
  INVOICE_LIST_IS_LOADING,
  INVOICE_LIST,
  FETCH_INVOICE,
  SAVE_INVOICE_START,
  SAVE_INVOICE_SUCCESS,
  SAVE_INVOICE_FAIL,
  CREATE_CHARGE,
  DELETE_INVOICE_START,
  DELETE_INVOICE_SUCCESS,
  DELETE_INVOICE_FAIL,
  CLEAR_INVOICE
} from './types'

export const fetchInvoices = () => {
  return dispatch => {
    dispatch({ type: INVOICE_LIST_IS_LOADING, payload: true })
    axios.get(`${API_URL}/invoices`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: INVOICE_LIST_IS_LOADING, payload: false })
      dispatch({ type: INVOICE_LIST, payload: response.data })
    })
  }
}

export function createInvoice ({
    customer,
    invoiceNumber,
    lineItems,
    amount,
    shareUrl,
    displayShareLinkImmediately,
    paid
  }) {
  // console.log('Action creator params:', customer, invoiceNumber, lineItems, amount, shareUrl, displayShareLinkImmediately, paid)
  return function (dispatch) {
    dispatch({ type: SAVE_INVOICE_START })
    axios({
      method: 'post',
      url: `${API_URL}/invoices`,
      data: {
        invoiceNumber,
        customer,
        lineItems,
        shareUrl,
        invoiceSettings: {
          displayShareLinkImmediately: displayShareLinkImmediately || false
        },
        paid: paid || false
      },
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: SAVE_INVOICE_SUCCESS }) // clears the Invoice status
      browserHistory.push('/invoices')  // take user to invoices list
      dispatch(createNotification({ message: 'Invoice created successfully', color: 'green', displayTime: 3 }))
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_INVOICE_FAIL })
      dispatch(createNotification({ message: 'There was a problem creating the invoice. Please try again.', color: 'red', displayTime: 4 }))
    })
  }
}

export function fetchInvoice (id) {
  return function (dispatch) {
    axios.get(`${API_URL}/invoices/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_INVOICE,
        payload: response.data
      })
    })
  }
}

export function updateInvoice ({
    id,
    customer,
    invoiceNumber,
    lineItems,
    amount,
    shareUrl,
    displayShareLinkImmediately,
    paid
  }) {
  return function (dispatch) {
    dispatch({ type: SAVE_INVOICE_START })
    axios({
      method: 'put',
      url: `${API_URL}/invoices/${id}`,
      data: {
        invoiceNumber,
        customer,
        billFrom: {
          name: 'Panoractives',
          email: 'info@panoractives.com'
        },
        lineItems,
        shareUrl,
        invoiceSettings: {
          displayShareLinkImmediately: displayShareLinkImmediately || false
        },
        paid: paid || false
      },
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(() => {
      dispatch({ type: SAVE_INVOICE_SUCCESS })
      dispatch(createNotification({ message: 'Invoice saved successfully', color: 'green', displayTime: 3 }))
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_INVOICE_FAIL })
      dispatch(createNotification({ message: 'There was a problem saving the invoice. Please try again.', color: 'red', displayTime: 4 }))
    })
  }
}

export function createCharge (token, id) {
  console.log('createCharge action creator token & id', token, id)
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${API_URL}/invoices/${id}/charge`,
      data: JSON.stringify(token)
    })
    .then(response => {
      console.log(response)
      dispatch({
        type: CREATE_CHARGE,
        payload: response.data
      })
    })
  }
}

export function deleteInvoice (id) {
  return function (dispatch) {
    dispatch({ type: DELETE_INVOICE_START })
    axios.delete(`${API_URL}/invoices/${id}`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: DELETE_INVOICE_SUCCESS })
      dispatch(createNotification({ message: 'Invoice deleted successfully', color: 'green', displayTime: 3 }))
      browserHistory.push('/invoices')
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: DELETE_INVOICE_FAIL })
      dispatch(createNotification({ message: 'An error occured, please try again.', color: 'red', displayTime: 4 }))
    })
  }
}

export function clearInvoice () {
  return { type: CLEAR_INVOICE }
}
