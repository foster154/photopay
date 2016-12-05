import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../../../actions';
require('../../../styles/invoicing/show.scss');

class SubmitPayment extends Component {
  
  onToken(token) {
    this.props.createCharge(token, this.props.invoice._id);
  }
  
  render() {
    
    const invoice = this.props.invoice;
    
    return (
      <div className="submit-payment-wrapper">
        <StripeCheckout
          invoiceId={invoice._id}
          token={this.onToken.bind(this)}
          stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
          amount={invoice.lineItems[0].amount * 100}
          name={invoice.billFrom.name}
          description={invoice.lineItems[0].item}
        >
        <button>
          Submit Payment & Access Photos
        </button>
        </StripeCheckout>
      
        <div className="text">(You'll receive access to the entire photo collection immediately after payment has been made.)</div>
      </div>
    );
  }
}

export default connect(null, actions)(SubmitPayment);