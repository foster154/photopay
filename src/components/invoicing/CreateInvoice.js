import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createInvoice, clearInvoice } from '../../actions'
import InvoiceForm from './Form/InvoiceForm'
import { browserHistory } from 'react-router'
require('../../styles/invoicing/CreateEdit.scss')

class CreateInvoice extends Component {
  componentWillMount () {
    this.props.clearInvoice()
  }

  renderNotifications () {
    const { status, message } = this.props
    if (status === 'error') {
      return (
        <div className='alert-error'>
          { message }
        </div>
      )
    }
  }

  render () {
    const onCreateSuccess = () => browserHistory.push('/invoices')

    return (
      <div className='create-edit-invoice-page'>
        <h1>Create Invoice</h1>
        { this.renderNotifications() }
        <InvoiceForm
          onFormSubmit={values => this.props.createInvoice({...values, onCreateSuccess})}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state.invoicing.status,
    message: state.invoicing.message
  }
}

CreateInvoice.propTypes = {
  createInvoice: PropTypes.func,
  clearInvoice: PropTypes.func,
  status: PropTypes.string,
  message: PropTypes.string
}

export default connect(mapStateToProps, { createInvoice, clearInvoice })(CreateInvoice)
