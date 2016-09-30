import { API_URL } from '../../constants.js';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  FETCH_CUSTOMERS
} from './types';

// =================================
//  Customers
// =================================

export function fetchCustomers() {
  return function(dispatch) {
    axios.get(`${API_URL}/customers`, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_CUSTOMERS,
        payload: response.data
      });
    });
  }
}