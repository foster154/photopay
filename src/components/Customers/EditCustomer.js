import React, { Component, PropTypes } from 'react'
import CustomerForm from './_CustomerForm'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchCustomer, updateCustomer, deleteCustomer } from '../../actions'
require('../../styles/customers/create.scss')

class EditCustomer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDeleteConfirm: false
    }
  }

  componentWillMount () {
    if (this.props.routeParams.id) {
      this.props.fetchCustomer(this.props.routeParams.id)
    }
  }

  renderDeleteButton () {
    return this.state.showDeleteConfirm
    ? null
    : (
      <button
        onClick={() => this.setState({showDeleteConfirm: true})}
        className='btn-primary delete-customer-btn'>
        Delete Customer
      </button>
    )
  }

  renderDeleteConfirm () {
    return this.state.showDeleteConfirm
    ? (
      <div className='delete-confirm-wrapper'>
        <div className='delete-confirm-text'>Are you sure? Deleting a customer cannot be undone.</div>
        <div
          className='delete-confirm-link cancel'
          onClick={() => this.setState({showDeleteConfirm: false})}
        >
          Cancel
        </div>
        <div
          className='delete-confirm-link delete'
          onClick={() => this.props.deleteCustomer(this.props.routeParams.id)}
        >
          Yes, Delete</div>
      </div>
    )
    : null
  }

  render () {
    return (
      <div className='create-customer-page'>
        <h1>Edit Customer</h1>
        <Link to='/customers'>
          <span className='fa fa-arrow-left' style={{marginBottom: 10}} /> Back to Customer List
        </Link>
        <div className='edit-form-wrapper'>
          <CustomerForm
            onFormSubmit={values => this.props.updateCustomer({
              id: this.props.routeParams.id,
              ...values
            })}
          />
          { this.renderDeleteButton() }
          { this.renderDeleteConfirm() }
        </div>
      </div>
    )
  }
}

EditCustomer.propTypes = {
  // react-router
  routeParams: PropTypes.object,
  // action creators
  fetchCustomer: PropTypes.func,
  updateCustomer: PropTypes.func,
  deleteCustomer: PropTypes.func
}

export default connect(null, { fetchCustomer, updateCustomer, deleteCustomer })(EditCustomer)
