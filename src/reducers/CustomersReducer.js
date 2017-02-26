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
} from '../actions/types'

const INITIAL_STATE = {
  customerList: [],
  customerListStatus: '',
  customer: {},
  status: {type: '', msg: ''}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_START:
      return { ...state, customerListStatus: 'loading' }
    case FETCH_CUSTOMERS_SUCCESS:
      return { ...state, customerListStatus: 'success', customerList: action.payload }
    case FETCH_CUSTOMERS_FAIL:
      return { ...state, customerListStatus: 'error', customerList: [] }
    case FETCH_CUSTOMER:
      return { ...state, customer: action.payload }
    case SAVE_CUSTOMER_START:
      return { ...state, status: {type: 'loading', msg: ''} }
    case SAVE_CUSTOMER_SUCCESS:
      return { ...state, status: {type: 'success', msg: action.payload} }
    case SAVE_CUSTOMER_FAIL:
      return { ...state, status: {type: 'error', msg: action.payload} }
    case CUSTOMER_STATUS_RESET:
      return { ...state, status: {type: '', msg: ''} }
    case CLEAR_CUSTOMER_FORM:
      return { ...state, customer: {} }
  }
  return state
}
