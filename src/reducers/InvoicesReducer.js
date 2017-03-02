import {
  FETCH_INVOICES,
  FETCH_INVOICE,
  SAVE_INVOICE,
  CREATE_CHARGE,
  DELETE_INVOICE,
  CLEAR_INVOICE
} from '../actions/types'

const INITIAL_STATE = {
  status: null,
  message: null,
  invoices: [],
  invoice: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_INVOICES:
      return { ...state, invoices: action.payload }
    case SAVE_INVOICE:
      switch (action.payload.status) {
        case 'start':
          return { ...state, status: 'loading' }
        case 'success':
          return { ...state, status: 'success', message: action.payload.message }
        case 'error':
          return { ...state, status: 'error', message: action.payload.message }
      }
      break
    case FETCH_INVOICE:
      return { ...state, invoice: action.payload }
    case CREATE_CHARGE:
      return { ...state, invoice: action.payload }
    case DELETE_INVOICE:
      switch (action.payload.status) {
        case 'start':
          return { ...state, status: 'loading' }
        case 'success':
          return { ...state, status: 'success', message: action.payload.message }
        case 'error':
          return { ...state, status: 'error', message: action.payload.message }
      }
      break
    case CLEAR_INVOICE:
      return { ...state, status: null, message: null, invoice: {} }
  }
  return state
}
