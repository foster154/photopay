import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import InvoiceList from './_InvoiceList'
import { Link } from 'react-router'
require('../../../styles/invoicing/list.scss')

class Invoices extends Component {
  renderNotifications () {
    const { status, message } = this.props
    if (status === 'success') {
      return (
        <div className='alert-success'>
          { message }
        </div>
      )
    }
  }

  render () {
    return (
      <div className='invoices-wrapper'>
        <Link to='/invoices/new' className='btn-primary new-invoice-btn'>
          <button className='btn-primary'>New Invoice</button>
        </Link>
        <h1>Invoices</h1>
        { this.renderNotifications() }
        <InvoiceList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.invoicing.status,
    message: state.invoicing.message
  }
}

Invoices.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string
}

export default connect(mapStateToProps)(Invoices)
