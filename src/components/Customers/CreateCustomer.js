import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { clearCustomerForm, createCustomer } from '../../actions'
import CustomerForm from './_CustomerForm'
import { browserHistory } from 'react-router'
require('../../styles/customers/create.scss')

class CreateCustomer extends Component {
  componentWillMount () {
    this.props.clearCustomerForm()
  }

  render () {
    const onCreateSuccess = () => browserHistory.push('/customers')

    return (
      <div className='create-customer-page'>
        <h1>Create a Customer</h1>
        <CustomerForm
          onFormSubmit={values => this.props.createCustomer({...values, onCreateSuccess})}
        />
      </div>
    )
  }
}

CreateCustomer.propTypes = {
  clearCustomerForm: PropTypes.func,
  createCustomer: PropTypes.func
}

export default connect(null, { clearCustomerForm, createCustomer })(CreateCustomer)
