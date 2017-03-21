import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createCustomer, customerStatusReset } from '../../actions'
require('../../styles/customers/form.scss')

class CustomerForm extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount () {
    this.props.customerStatusReset()
  }

  handleFormSubmit (formProps) {
    this.props.onFormSubmit(formProps)
  }

  render () {
    return (
      <form
        className='photo-invoice-form'
        onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>

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
          <Field className='text-input' name='contactFirstName' component='input' type='input' />
        </fieldset>

        <fieldset>
          <label>Last Name of Contact</label>
          <Field className='text-input' name='contactLastName' component='input' type='input' />
        </fieldset>

        {
          this.props.saveStatus === 'loading'
          ? <button className='btn-primary clearfix save-customer' action='submit'><span className='fa fa-spin fa-spinner' /></button>
          : <button className='btn-primary clearfix save-customer' action='submit'>Save Customer</button>
        }
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    initialValues: state.customers.customer,
    saveStatus: state.customers.saveStatus
  }
}

const form = reduxForm({
  form: 'customerForm',
  enableReinitialize: true
})

CustomerForm.propTypes = {
  // component declaration
  onFormSubmit: PropTypes.func,
  onCreateSuccess: PropTypes.func,
  // redux form
  handleSubmit: PropTypes.func,
  // mapStateToProps
  saveStatus: PropTypes.string,
  // action creators
  createCustomer: PropTypes.func,
  customerStatusReset: PropTypes.func
}

export default connect(mapStateToProps, { createCustomer, customerStatusReset })(form(CustomerForm))
