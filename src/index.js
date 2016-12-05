import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import RequireAuth from './components/auth/require_auth';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Welcome from './components/welcome';
import Invoices from './components/invoicing/list/invoices';
import InvoiceShow from './components/invoicing/show/invoice_show';
import CreateInvoice from './components/invoicing/detail/create_invoice';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

// Styles
require('./styles/main.scss');

//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//const store = createStoreWithMiddleware(reducers);

let store = createStore(reducers, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const token = localStorage.getItem('token');
// If a token exists, consider the user to be signed in.
if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path="invoices" component={RequireAuth(Invoices)} />
        <Route path="/invoices/new" component={CreateInvoice} />
      </Route>
      
      <Route path="/invoices/:id" component={InvoiceShow} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
