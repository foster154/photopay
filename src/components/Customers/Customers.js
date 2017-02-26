import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchCustomers } from '../../actions'
import CustomerRow from './_CustomerRow'
require('../../styles/customers/list.scss')

class Customers extends Component {
  componentWillMount () {
    this.props.fetchCustomers()
  }

  renderCreateSuccessMessage () {
    const { customerStatus } = this.props
    if (customerStatus.type === 'success') {
      return (
        <tr>
          <th className='customer-create-success-alert' colSpan='3'>
            { customerStatus.msg }
          </th>
        </tr>
      )
    }
  }

  renderCustomers () {
    const { customerListStatus, customers } = this.props
    if (customerListStatus === 'loading') {
      return (
        // List is loading
        <div className='customer-list-loading'>
          <span className='fa fa-spin fa-spinner' />
        </div>
      )
    } else if (customerListStatus === 'success' && customers.length === 0) {
      return (
        // Custer list is loaded, and is empty
        <div className='customer-list-empty'>No customers found. <Link to='/customers/new'>Create one</Link>.</div>
      )
    }

    return this.props.customers.map(customer => {
      // there are customers... render them.
      return <CustomerRow customer={customer} key={customer._id} />
    })
  }

  render () {
    return (
      <div className='customers-wrapper'>
        <Link to='/customers/new' className='btn-primary new-customer-btn'>
          <button className='btn-primary'>Create Customer</button>
        </Link>
        <h1>Customers</h1>

        <table className='customers'>
          <thead>
          { this.renderCreateSuccessMessage() }
            <tr>
              <th>Customer/Company</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.renderCustomers() }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    customerListStatus: state.customers.customerListStatus,
    customerStatus: state.customers.status,
    customers: state.customers.customerList
  }
}

Customers.propTypes = {
  customerListStatus: PropTypes.string,
  customerStatus: PropTypes.object,
  customers: PropTypes.array,
  fetchCustomers: PropTypes.func
}

export default connect(mapStateToProps, { fetchCustomers })(Customers)
