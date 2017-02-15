import { API_URL } from './../constants.js'
import axios from 'axios'
import {
  FETCH_CUSTOMERS
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
