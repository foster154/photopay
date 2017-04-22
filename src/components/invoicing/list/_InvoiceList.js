import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchInvoices } from '../../../actions'
import InvoiceListEntry from './_InvoiceListEntry'
import NoInvoicesFound from './_NoInvoicesFound'
import LoadingSpinner from './_LoadingSpinner'
require('../../../styles/invoicing/list.scss')

class InvoiceList extends Component {
  componentWillMount () {
    this.props.fetchInvoices()
  }

  renderInvoices () {
    const { invoiceListIsLoading, invoiceList } = this.props

    if (invoiceListIsLoading) {
      return <LoadingSpinner />
    } else if (invoiceList.length === 0) {
      return <NoInvoicesFound />
    } else {
      return invoiceList.map((invoice) => {
        return <InvoiceListEntry invoice={invoice} />
      })
    }
  }

  render () {
    return (
      <table className='invoices-table'>
        <thead>
          <tr>
            <th>Paid</th>
            <th>Date</th>
            <th>Invoice #</th>
            <th className='text-left'>Company</th>
            <th className='text-left'>Description</th>
            <th>Amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.renderInvoices()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    invoiceListIsLoading: state.invoicing.invoiceListIsLoading,
    invoiceList: state.invoicing.invoiceList
  }
}

InvoiceList.propTypes = {
  // mapStateToProps
  invoiceListIsLoading: PropTypes.bool,
  invoiceList: PropTypes.array,
  // actions
  fetchInvoices: PropTypes.func
}

export default connect(mapStateToProps, { fetchInvoices })(InvoiceList)
