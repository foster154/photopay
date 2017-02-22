import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createCustomer, createCustomerReset } from '../../actions'
require('../../styles/customers/form.scss')

class CustomerForm extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount () {
    this.props.createCustomerReset()
  }

  handleFormSubmit (formProps) {
    console.log('handleFormSubmit!!!')
    console.log(formProps)
    this.props.createCustomer({
      customerName: formProps.customerName,
      contactFirstName: formProps.firstName,
      contactLastName: formProps.lastName,
      email: formProps.email,
      onCreateSuccess: this.props.onCreateSuccess })
  }

  renderErrorMessage () {
    if (this.props.createStatus === 'error') {
      return (
        <div className='msg-red' style={{color: '#C00'}}>
          { this.props.errorMessage }
        </div>
      )
    }
  }

  render () {
    return (
      <form
        className='photo-invoice-form'
        onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
        { this.renderErrorMessage() }
        <fieldset>
          <label>Customer/Company Name<sup>*</sup></label>
          <Field className='text-input' name='customerName' component='input' type='input' />
        </fieldset>

        <fieldset>
          <label>Email</label>
          <Field className='text-input' name='email' component='input' type='input' />
        </fieldset>

        <fieldset>
          <label>First Name of Contact</label>
          <Field className='text-input' name='firstName' component='input' type='input' />
        </fieldset>

        <fieldset>
          <label>Last Name of Contact</label>
          <Field className='text-input' name='lastName' component='input' type='input' />
        </fieldset>

        {
          this.props.createStatus === 'loading'
          ? <button className='btn-primary clearfix save-customer' action='submit'><span className='fa fa-spin fa-spinner' /></button>
          : <button className='btn-primary clearfix save-customer' action='submit'>Save Customer</button>
        }
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    createStatus: state.customers.createStatus,
    errorMessage: state.customers.errorMessage
  }
}

const form = reduxForm({
  form: 'customerForm'
})

CustomerForm.propTypes = {
  handleSubmit: PropTypes.func,
  createStatus: PropTypes.string,
  errorMessage: PropTypes.string,
  createCustomer: PropTypes.func,
  onCreateSuccess: PropTypes.func,
  createCustomerReset: PropTypes.func
}

export default connect(mapStateToProps, { createCustomer, createCustomerReset })(form(CustomerForm))
