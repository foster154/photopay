import React, { Component, PropTypes } from 'react'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { createInvoice, fetchCustomers, fetchInvoice } from '../../../actions'
import CustomerSelect from './CustomerSelect'
import { normalizeShareUrl } from './_normalize_share_url'
import RenderItems from './_RenderItems'
import PhotoUploader from './_PhotoUploader'
require('../../../styles/invoicing/form.scss')

class InvoiceForm extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount () {
    this.props.fetchCustomers()
  }

  handleFormSubmit (formProps) {
    const validShareUrl = normalizeShareUrl(formProps.shareUrl)

    const expandedFormProps = {
      customer: formProps.customer,
      invoiceNumber: formProps.invoiceNumber,
      lineItems: formProps.lineItems,
      amount: formProps.amount,
      shareUrl: validShareUrl,
      displayShareLinkImmediately: formProps.displayShareLinkImmediately,
      paid: formProps.paid
    }

    this.props.onFormSubmit(expandedFormProps)
  }

  composeCustomerLabel (customer) {
    const { customerName, contactFirstName, contactLastName } = customer
    let label = customerName
    contactFirstName || contactLastName ? label += ' - ' : null
    contactFirstName ? label += contactFirstName : null
    contactLastName ? label += ' ' : null
    contactLastName ? label += contactLastName : null
    return label
  }

  calculateTotal () {
    if (this.props.lineItemValues) {
      return this.props.lineItemValues.reduce((sum, lineItem) => {
        const amount = lineItem.amount
        if (amount && !isNaN(parseFloat(amount))) {
          return sum + parseFloat(lineItem.amount)
        } else {
          return sum
        }
      }, 0)
    }
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return <div className='msg-red'>{this.props.errorMessage}</div>
    }
  }

  render () {
    let customerOptions = [ {} ]

    if (this.props.customerList.length > 0) {
      customerOptions = this.props.customerList.map(function (customer) {
        return {
          value: customer._id,
          label: `
            ${customer.customerName}
            ${customer.contactFirstName || customer.contactLastName ? '-' : ''}
            ${customer.contactFirstName || ''} ${customer.contactLastName || ''}`
        }
      })
    }

    return (
      <div className='invoice-form-wrapper'>
        <form
          className='photo-invoice-form'
          onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          {this.renderAlert()}
          <div className='clearfix'>
            <fieldset className='customer-field'>
              <label htmlFor='customer'>Customer:</label>
              <Field
                name='customer'
                component={props =>
                  <CustomerSelect
                    {...props}
                    options={customerOptions}
                    clearable={false}
                  />
                }
              />
            </fieldset>
            <fieldset className='invoice-number-field'>
              <label htmlFor='invoiceNumber'>Invoice #:</label>
              <Field className='text-input' name='invoiceNumber' component='input' type='input' />
            </fieldset>
          </div>

          <h2 className='text-center'>Items</h2>
          <div className='clearfix'>
            <FieldArray name='lineItems' component={RenderItems} />
            <div className='clearfix'>
              <div className='total-label'>Total:</div>
              <div className='total-amount'>${ this.calculateTotal() }</div>
            </div>
          </div>

          <h2 className='text-center'>After Payment Has Been Received</h2>
          <fieldset>
            <label>Share This Link:</label>
            <Field className='text-input' name='shareUrl' component='input' type='input' />
          </fieldset>
          <fieldset>
            <Field name='displayShareLinkImmediately' component='input' type='checkbox' />
            Display share link immediately (even before payment has been received)
            <br />
            <Field name='paid' component='input' type='checkbox' />
            Mark invoice as paid
            <br />
          </fieldset>

          <h2 className='text-center'>Sample Photos</h2>
          <PhotoUploader />

          <button className='btn-primary clearfix save-invoice' action='submit'>Save Invoice</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const selector = formValueSelector('invoiceForm')
  const invoiceNumber = state.invoicing.invoice.invoiceNumber
    ? state.invoicing.invoice.invoiceNumber
    : state.settings.userSettings.currentInvoiceNumber

  return {
    initialValues: {
      ...state.invoicing.invoice,
      invoiceNumber: invoiceNumber
    },
    customerList: state.customers.customerList,
    lineItemValues: selector(state, 'lineItems')
  }
}

const form = reduxForm({
  form: 'invoiceForm',
  enableReinitialize: true
})

InvoiceForm.propTypes = {
  onFormSubmit: PropTypes.func,
  customerList: PropTypes.array,      // mapStateToProps
  errorMessage: PropTypes.string,     // ?
  lineItemValues: PropTypes.array,    // Redux form
  handleSubmit: PropTypes.func,       // Redux form
  fetchCustomers: PropTypes.func     // Redux action creator
}

export default connect(mapStateToProps, { createInvoice, fetchCustomers, fetchInvoice })(form(InvoiceForm))
