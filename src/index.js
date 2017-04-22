import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import RequireAuth from './components/Auth/RequireAuth'
import Signup from './components/Auth/Signup'
import Signin from './components/Auth/Signin'
import Signout from './components/Auth/Signout'
import Welcome from './components/Welcome'
import Invoices from './components/Invoicing/List/Invoices'
import InvoiceShow from './components/Invoicing/Show/InvoiceShow'
import CreateInvoice from './components/Invoicing/CreateInvoice'
import EditInvoice from './components/Invoicing/EditInvoice'
import Customers from './components/Customers/Customers'
import CreateCustomer from './components/Customers/CreateCustomer'
import EditCustomer from './components/Customers/EditCustomer'
import SettingsPage from './components/Settings/SettingsPage'
import reducers from './reducers'
import { AUTH_USER } from './actions/types'

// App-wide styles
require('./styles/styles.scss')

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
// const store = createStoreWithMiddleware(reducers)

let store = createStore(reducers, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

const token = window.localStorage.getItem('token')
// If a token exists, consider the user to be signed in.
if (token) {
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Welcome} />
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
        <Route path='signout' component={Signout} />
        <Route path='invoices' component={RequireAuth(Invoices)} />
        <Route path='/invoices/new' component={CreateInvoice} />
        <Route path='/invoices/edit/:id' component={EditInvoice} />
        <Route path='/customers' component={RequireAuth(Customers)} />
        <Route path='/customers/new' component={RequireAuth(CreateCustomer)} />
        <Route path='/customers/edit/:id' component={RequireAuth(EditCustomer)} />
        <Route path='/settings' component={SettingsPage} />
      </Route>

      <Route path='/:id' component={InvoiceShow} />
    </Router>
  </Provider>
  , document.querySelector('#root'))
