import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchSettings, createInvoice, clearInvoice, updateUserInvoiceNumber } from '../../actions'
import InvoiceForm from './Form/InvoiceForm'
import { browserHistory } from 'react-router'
require('../../styles/invoicing/CreateEdit.scss')

class CreateInvoice extends Component {
  componentWillMount () {
    this.props.clearInvoice()
    this.props.fetchSettings()
  }

  handleCreateSubmit (values) {
    const onCreateSuccess = () => browserHistory.push('/invoices')
    this.props.updateUserInvoiceNumber(values.invoiceNumber)
    this.props.createInvoice({...values, onCreateSuccess})
  }

  render () {
    return (
      <div className='create-edit-invoice-page'>
        <h1>Create Invoice</h1>
        <InvoiceForm
          // onFormSubmit={values => this.props.createInvoice({...values, onCreateSuccess})}
          onFormSubmit={values => this.handleCreateSubmit(values)}
        />
      </div>
    )
  }
}

CreateInvoice.propTypes = {
  // action creators
  fetchSettings: PropTypes.func,
  createInvoice: PropTypes.func,
  clearInvoice: PropTypes.func,
  updateUserInvoiceNumber: PropTypes.func

}

export default connect(null, { fetchSettings, createInvoice, clearInvoice, updateUserInvoiceNumber })(CreateInvoice)
