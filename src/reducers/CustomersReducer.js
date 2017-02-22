import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER_START,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAIL,
  CREATE_CUSTOMER_RESET
} from '../actions/types'

const INITIAL_STATE = {
  customerList: [],
  customer: {},
  createStatus: null,
  errorMessage: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return { ...state, customerList: action.payload }
    case CREATE_CUSTOMER_START:
      return { ...state, createStatus: 'loading', errorMessage: null }
    case CREATE_CUSTOMER_SUCCESS:
      return { ...state, createStatus: 'success', errorMessage: null }
    case CREATE_CUSTOMER_FAIL:
      return { ...state, createStatus: 'error', errorMessage: action.payload }
    case CREATE_CUSTOMER_RESET:
      return { ...state, createStatus: null, errorMessage: null }
  }
  return state
}
