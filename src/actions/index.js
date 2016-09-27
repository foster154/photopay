import { API_URL } from '../../constants.js';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER, 
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_INVOICES,
  FETCH_INVOICE,
  CREATE_INVOICE,
  CREATE_CHARGE
} from './types';

export function signinUser({ email, password }) {
  
  // reduxThunk gives us the ability to do this...
  // allows us to dispatch multiple actions from a single action creator
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // request is good...
        // - Update redux state to indicate user is authenticated
        dispatch({ type: AUTH_USER });  // this is like using the normal, vanilla action creator/action 
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/invoices'
        browserHistory.push('/invoices');
      })
      .catch(() => {
        // request is bad...
        // - show an error to the user
        dispatch(authError('Incorrect email/password. Please try again.'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/invoices');
    })
    .catch(error => {
      dispatch(authError(error.response.data.error))
    });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  
  return { type: UNAUTH_USER };
}

// DEMO
// This is just a sample to use to practice hitting a protected route on the server
export function fetchMessage() {
  return function(dispatch) {
    axios.get(`${API_URL}/`, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    });
  }
}

// =================================
//  Invoices
// =================================

export function fetchInvoices() {
  return function(dispatch) {
    axios.get(`${API_URL}/invoices`, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_INVOICES,
        payload: response.data
      });
    });
  }
}

export function createInvoice({description, amount}) {
  return function(dispatch) {
    // axios.post(`${API_URL}/invoices`, {description, amount}, {
    //   headers: { authorization: localStorage.getItem('token') }
    // })
    axios({
      method: 'post',
      url: `${API_URL}/invoices`,
      data: { description, amount },
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: CREATE_INVOICE,
        payload: response.data
      });
    });
  }
}

export function fetchInvoice(id) {
  return function(dispatch) {
    axios.get(`${API_URL}/invoices/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_INVOICE,
        payload: response.data
      });
    });
  }
}

export function createCharge(token, id) {
  console.log("action creator id", id);
  return function(dispatch) {
    axios({
      method: 'post',
      url: `${API_URL}/invoices/${id}/charge`,
      data: JSON.stringify(token),
    })
    .then(response => {
      dispatch({
        type: CREATE_CHARGE,
        payload: response.data
      });
    });
  }
}