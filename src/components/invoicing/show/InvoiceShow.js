import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import CompanyInfo from './_CompanyInfo'
import LineItems from './_LineItems'
import SubmitPayment from './_SubmitPayment'
import DisplayLink from './_DisplayLink'
require('../../../styles/invoicing/show.scss')

class InvoiceShow extends Component {
  componentWillMount () {
    this.props.fetchInvoice(this.props.params.id)
  }

  render () {
    const invoice = this.props.invoice

    let invoiceContent
    if (invoice.paid === false) {
      invoiceContent = (
        <div className='invoice-show-content'>
          <CompanyInfo invoice={invoice} />
          <LineItems invoice={invoice} />
          <SubmitPayment invoice={invoice} />
        </div>
      )
    } else if (invoice.paid === true) {
      invoiceContent = (
        <div className='invoice-show-content'>
          <CompanyInfo invoice={invoice} />
          <LineItems invoice={invoice} />
          <DisplayLink invoice={invoice} />
        </div>
      )
    } else {
      invoiceContent = (
        <div>Loading...</div>
      )
    }

    return (
      <div className='invoice-show-background'>
        {invoiceContent}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { invoice: state.invoicing.invoice }
}

InvoiceShow.propTypes = {
  params: PropTypes.object,         // react-router (?)
  invoice: PropTypes.object,        // mapStateToProps
  fetchInvoice: PropTypes.func      // Redux action creator
}

export default connect(mapStateToProps, actions)(InvoiceShow)
