import { API_URL } from './../constants.js'
import axios from 'axios'
import { createNotification } from './NotificationActions'
import {
  FETCH_USER_START,
  FETCH_USER_FAIL,
  SAVE_USER_START,
  SAVE_USER_FAIL,
  UPDATE_USER_SETTINGS
} from './types'

export const fetchSettings = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_START })

    axios.get(`${API_URL}/user/settings`, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: UPDATE_USER_SETTINGS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: FETCH_USER_FAIL })
    })
  }
}

export const saveSettings = ({
  firstName,
  lastName,
  companyName,
  displayEmail,
  phone,
  currentInvoiceNumber
}) => {
  return dispatch => {
    dispatch({ type: SAVE_USER_START })

    axios.put(`${API_URL}/user/settings`, {firstName, lastName, companyName, displayEmail, phone, currentInvoiceNumber}, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: UPDATE_USER_SETTINGS,
        payload: response.data
      })
      dispatch(createNotification({ message: 'Settings saved successfully', color: 'green', displayTime: 3 }))
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_USER_FAIL })
      dispatch(createNotification({ message: 'Error saving settings, please try again.', color: 'red', displayTime: 4 }))
    })
  }
}

export const updateUserInvoiceNumber = invoiceNumber => {
  return dispatch => {
    axios.post(`${API_URL}/user/updateInvoiceNumber`, {invoiceNumber}, {
      headers: { authorization: window.localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({ type: UPDATE_USER_SETTINGS, payload: response.data })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: SAVE_USER_FAIL })
    })
  }
}
