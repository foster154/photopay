import React, { Component } from 'react'
import CustomerForm from './_CustomerForm'
import { browserHistory } from 'react-router'
require('../../styles/customers/create.scss')

class Customers extends Component {
  render () {
    return (
      <div className='create-customer-page'>
        <h1>Create a Customer</h1>
        <CustomerForm
          onCreateSuccess={() => browserHistory.push('/customers')}
          // onCreateError={() => this.renderCreateError()}
        />
      </div>
    )
  }
}

export default Customers
