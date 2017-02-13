import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../../../actions'
import dateFormat from 'dateformat'
import EmailButton from './_EmailButton'
require('../../../styles/invoicing/list.scss')

class InvoiceList extends Component {

  componentWillMount () {
    this.props.fetchInvoices()
    console.log(this.props.invoices)
  }

  renderInvoices () {
    if (this.props.invoices.length > 0) {
      return this.props.invoices.map((invoice) => {
        const rowClasses = invoice.paid ? 'invoice-paid' : 'invoice-unpaid'
        return (
          <tr key={invoice._id} className={rowClasses}>
            <td>
              {invoice.paid
                ? <span className='fa fa-check paid' />
                : <span className='fa fa-close unpaid' /> }
            </td>
            <td>{dateFormat(invoice.date, 'm/d/yy')}</td>
            <td>{invoice.invoiceNumber ? invoice.invoiceNumber : null}</td>
            <td>{invoice.billTo ? invoice.billTo.name : null}</td>
            <td className='text-left'>{invoice.lineItems[0].item}</td>
            <td>${(invoice.lineItems[0].amount).toFixed(2)}</td>
            <td className='invoice-list-actions'>
              <Link className='invoice-list-btn preview-btn' to={'/invoices/' + invoice._id} target='_blank'>
                <span className='fa fa-eye' />
              </Link>
              <Link className='invoice-list-btn edit-btn' to='#'>
                <span className='fa fa-pencil' />
              </Link>
              <EmailButton invoice={invoice} />
            </td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td className='loading-graphic' colSpan='7'><span className='fa fa-refresh fa-spin' /></td>
        </tr>
      )
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
            <th>Company</th>
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

function mapStateToProps (state) {
  return { invoices: state.invoicing.invoices }
}

InvoiceList.propTypes = {
  fetchInvoices: PropTypes.func,
  invoices: PropTypes.array
}

export default connect(mapStateToProps, actions)(InvoiceList)
