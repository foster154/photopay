import {
  FETCH_INVOICES,
  CREATE_INVOICE,
  FETCH_INVOICE,
  CREATE_CHARGE
} from '../actions/types';

export default function(state = { invoices: [], invoice: {} }, action) {
  switch(action.type) {
    case FETCH_INVOICES:
      return { ...state, invoices: action.payload };
    case CREATE_INVOICE:
      return { ...state } // TODO: Finish this
    case FETCH_INVOICE:
      return { ...state, invoice: action.payload };
    case CREATE_CHARGE:
      return { ...state, invoice: action.payload };
  }
  return state;
}