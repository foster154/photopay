import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import invoicesReducer from './invoices_reducer';
import customersReducer from './customers_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  invoicing: invoicesReducer,
  customers: customersReducer,
  form: formReducer,
});

export default rootReducer;
