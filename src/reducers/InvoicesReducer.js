import {
  INVOICE_LIST_IS_LOADING,
  INVOICE_LIST,
  FETCH_INVOICE,
  SAVE_INVOICE_START,
  SAVE_INVOICE_SUCCESS,
  SAVE_INVOICE_FAIL,
  CREATE_CHARGE,
  DELETE_INVOICE_START,
  DELETE_INVOICE_SUCCESS,
  DELETE_INVOICE_FAIL,
  CLEAR_INVOICE
} from '../actions/types'

const INITIAL_STATE = {
  invoiceList: [],
  invoiceListIsLoading: false,
  status: null,  // I want to refactor this. currently only used for create/edit
  invoice: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INVOICE_LIST_IS_LOADING:
      return { ...state, invoiceListIsLoading: action.payload }
    case INVOICE_LIST:
      return { ...state, invoiceList: action.payload }
    case FETCH_INVOICE:
      return { ...state, invoice: action.payload }

    case SAVE_INVOICE_START:
    case DELETE_INVOICE_START:
      return { ...state, status: 'loading' }

    case SAVE_INVOICE_SUCCESS:
    case SAVE_INVOICE_FAIL:
    case DELETE_INVOICE_SUCCESS:
    case DELETE_INVOICE_FAIL:
      return { ...state, status: null }

    case CREATE_CHARGE:
      return { ...state, invoice: action.payload }

    case CLEAR_INVOICE:
      return { ...state, status: null, invoice: {} }
  }
  return state
}
