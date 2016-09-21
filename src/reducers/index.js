import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import invoicesReducer from './invoices_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  invoicing: invoicesReducer
});

export default rootReducer;
