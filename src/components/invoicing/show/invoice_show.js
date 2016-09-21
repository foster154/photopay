import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import CompanyInfo from './_company_info';
import LineItems from './_line_items';
import SubmitPayment from './_submit_payment';
import HowItWorks from './_how_it_works';
import DisplayLink from './_display_link';

class InvoiceShow extends Component {
  componentWillMount() {
    this.props.fetchInvoice(this.props.params.id);
  }
  
  render() {
    const invoice = this.props.invoice;
    
    // Styles
    const styles = {
      background: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        paddingTop: '30',
        paddingBottom: '30'
      },
      contentWrapper: {
        backgroundColor: '#fff',
        width: '600',
        maxWidth: '100%',
        margin: '0 auto 30px',
        boxShadow: '0 10px 6px -6px rgba(0,0,0,0.2)'
      }
    }
    
    let invoiceContent;
    if (invoice.paid === false) {
      invoiceContent = (
        <div style={styles.contentWrapper}>
          <CompanyInfo invoice={invoice} />
          <LineItems invoice={invoice} />
          <SubmitPayment invoice={invoice} />
          <HowItWorks invoice={invoice} />
        </div>
      );
    } else if (invoice.paid === true) {
      invoiceContent = (
        <div style={styles.contentWrapper}>
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
      <div style={styles.background}>
        {invoiceContent}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { invoice: state.invoicing.invoice }
}

export default connect(mapStateToProps, actions)(InvoiceShow);