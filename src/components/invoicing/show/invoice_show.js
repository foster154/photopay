import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import CompanyInfo from './_company_info';
import LineItems from './_line_items';
import SubmitPayment from './_submit_payment';
import DisplayLink from './_display_link';
require('../../../styles/invoicing/show.scss');

class InvoiceShow extends Component {
  componentWillMount() {
    this.props.fetchInvoice(this.props.params.id);
  }
  
  render() {
    const invoice = this.props.invoice;
    
    let invoiceContent;
    if (invoice.paid === false) {
      invoiceContent = (
        <div className="invoice-show-content">
          <CompanyInfo invoice={invoice} />
          <LineItems invoice={invoice} />
          <SubmitPayment invoice={invoice} />
        </div>
      );
    } else if (invoice.paid === true) {
      invoiceContent = (
        <div className="invoice-show-content">
          <CompanyInfo invoice={invoice} />
          <LineItems invoice={invoice} />
          <DisplayLink invoice={invoice} />
        </div>
      );
    } else {
      invoiceContent = (
        <div>Loading...</div>
      );
    }
    
    return (
      <div className="invoice-show-background">
        {invoiceContent}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { invoice: state.invoicing.invoice }
}

export default connect(mapStateToProps, actions)(InvoiceShow);