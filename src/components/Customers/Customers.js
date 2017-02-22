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
    if (this.props.createStatus === 'success') {
      return (
        <div className='customer-create-success-alert'>
          Customer created successfully!
        </div>
      )
    }
  }

  renderCustomers () {
    return this.props.customers.map(customer => {
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
        { this.renderCreateSuccessMessage() }
        <table className='customers'>
          <thead>
            <tr>
              <th>Customer/Company</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>
          { this.renderCustomers() }
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    createStatus: state.customers.createStatus,
    customers: state.customers.customerList
  }
}

Customers.propTypes = {
  createStatus: PropTypes.string,
  customers: PropTypes.array,
  fetchCustomers: PropTypes.func
}

export default connect(mapStateToProps, { fetchCustomers })(Customers)
