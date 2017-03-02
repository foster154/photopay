import { API_URL } from './../constants.js'
import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  FETCH_INVOICES,
  FETCH_INVOICE,
  SAVE_INVOICE,
  CREATE_CHARGE,
  DELETE_INVOICE,
  CLEAR_INVOICE
} from './types'

export function fetchInvoices () {
  return function (dispatch) {
    axios.get(`${API_URL}/invoices`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_INVOICES,
        payload: response.data
      })
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
    dispatch({ type: SAVE_INVOICE, payload: {status: 'start'} })
    axios({
      method: 'post',
      url: `${API_URL}/invoices`,
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
    .then(response => {
      dispatch({
        type: SAVE_INVOICE,
        payload: {status: 'success', message: 'Invoice created successfully'}
      })
      browserHistory.push('/invoices')
      setTimeout(() => {
        dispatch(clearInvoice())
      }, 3000)
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: SAVE_INVOICE,
        payload: {status: 'error', message: 'There was a problem creating the invoice. Please try again.'}
      })
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

export function editInvoice ({
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
    dispatch({ type: SAVE_INVOICE, payload: {status: 'start'} })
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
    .then(response => {
      dispatch({
        type: SAVE_INVOICE,
        payload: {status: 'success', message: 'Invoice saved successfully'}
      })
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: SAVE_INVOICE,
        payload: {status: 'error', message: 'There was a problem saving the invoice. Please try again.'}
      })
    })
  }
}

export function createCharge (token, id) {
  console.log('action creator id', id)
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
    dispatch({
      type: DELETE_INVOICE,
      payload: { status: 'start' }
    })
    axios.delete(`${API_URL}/invoices/${id}`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: DELETE_INVOICE,
        payload: { status: 'success', message: 'Invoice deleted.' }
      })
      browserHistory.push('/invoices')
      setTimeout(() => {
        dispatch(clearInvoice())
      }, 3000)
    })
    .catch(error => {
      console.log(error)
      dispatch({
        type: DELETE_INVOICE,
        payload: { status: 'error', message: 'There was a problem deleting the invoice. Please try again.' }
      })
    })
  }
}

export function clearInvoice () {
  return { type: CLEAR_INVOICE }
}
