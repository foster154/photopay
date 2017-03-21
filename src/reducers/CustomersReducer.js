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
  saveStatus: null
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
      return { ...state, saveStatus: 'loading' }
    case SAVE_CUSTOMER_SUCCESS:
    case SAVE_CUSTOMER_FAIL:
    case CUSTOMER_STATUS_RESET:
      return { ...state, saveStatus: null }

    case CLEAR_CUSTOMER_FORM:
      return { ...state, customer: {} }
  }
  return state
}
