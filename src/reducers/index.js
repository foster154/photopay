import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import invoicesReducer from './invoices_reducer';
import customersReducer from './customers_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  invoicing: invoicesReducer,
  customers: customersReducer,
});

export default rootReducer;
