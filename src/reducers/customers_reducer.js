import {
  FETCH_CUSTOMERS
} from '../actions/types';

export default function(state = { customerList: [], customer: {} }, action) {
  switch(action.type) {
    case FETCH_CUSTOMERS:
      return { ...state, customerList: action.payload };
  }
  return state;
}