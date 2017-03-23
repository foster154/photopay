import React, { Component, PropTypes } from 'react'
import InvoiceForm from './Form/InvoiceForm'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import { fetchInvoice, updateInvoice, deleteInvoice } from '../../actions'
require('../../styles/invoicing/CreateEdit.scss')

class EditInvoice extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDeleteConfirm: false
    }
  }

  componentWillMount () {
    if (this.props.routeParams.id) {
      this.props.fetchInvoice(this.props.routeParams.id)
    }
  }

  renderDeleteButton () {
    return this.state.showDeleteConfirm
    ? null
    : (
      <button
        onClick={() => this.setState({showDeleteConfirm: true})}
        className='btn-primary delete-invoice-btn'>
        Delete Invoice
      </button>
    )
  }

  renderDeleteConfirm () {
    return this.state.showDeleteConfirm
    ? (
      <div className='delete-confirm-wrapper'>
        <div className='delete-confirm-text'>Are you sure? Deleting an invoice cannot be undone.</div>
        <div
          className='delete-confirm-link cancel'
          onClick={() => this.setState({showDeleteConfirm: false})}
        >
          Cancel
        </div>
        <div
          className='delete-confirm-link delete'
          onClick={() => this.props.deleteInvoice(this.props.routeParams.id)}
        >
          Yes, Delete</div>
      </div>
    )
    : null
  }

  render () {
    const onSaveSuccess = () => browserHistory.push('/invoices')

    return (
      <div className='create-edit-invoice-page'>
        <h1>Edit Invoice</h1>
        <Link to='/invoices'>
          <span className='fa fa-arrow-left' /> Back to Invoices
        </Link>
        <div className='edit-invoice-form-wrapper'>
          <InvoiceForm
            onFormSubmit={values => this.props.updateInvoice({
              id: this.props.routeParams.id,
              ...values,
              onSaveSuccess
            })}
          />
          { this.renderDeleteButton() }
          { this.renderDeleteConfirm() }
        </div>
      </div>
    )
  }
}

EditInvoice.propTypes = {
  // react-router
  routeParams: PropTypes.object,
  // action creators
  fetchInvoice: PropTypes.func,
  updateInvoice: PropTypes.func,
  deleteInvoice: PropTypes.func
}

export default connect(null, { fetchInvoice, updateInvoice, deleteInvoice })(EditInvoice)
