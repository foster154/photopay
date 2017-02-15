import { API_URL } from './../constants.js'
import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  FETCH_INVOICES,
  FETCH_INVOICE,
  CREATE_INVOICE,
  CREATE_CHARGE
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
    customerName,
    customerEmail,
    invoiceNumber,
    lineItems,
    amount,
    shareUrl,
    displayShareLinkImmediately,
    paid
  }) {
  console.log('Action creator params:',
  customerName,
  customerEmail,
  invoiceNumber,
  lineItems,
  amount,
  shareUrl,
  displayShareLinkImmediately,
  paid)
  return function (dispatch) {
    axios({
      method: 'post',
      url: `${API_URL}/invoices`,
      data: {
        invoiceNumber,
        billTo: {
          name: customerName,
          email: customerEmail
        },
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
        type: CREATE_INVOICE,
        payload: response.data
      })
      browserHistory.push('/invoices')
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
