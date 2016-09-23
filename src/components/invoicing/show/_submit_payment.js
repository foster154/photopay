import React, { Component } from 'react';
import { connect } from 'react-redux';
import Universals from '../../universal_styles';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../../../actions';
// import { STRIPE_PUBLISHABLE_KEY } from '../../../../config.js'; 

class SubmitPayment extends Component {
  
  onToken(token) {
    this.props.createCharge(token, this.props.invoice._id);
  }
  
  render() {
    
    const invoice = this.props.invoice;
    
    const s = {
      btnWrapper: {
        textAlign: 'center',
        marginTop: '12px'
      },
      btn: {
        width: '360',
        maxWidth: '90%',
        backgroundColor: Universals.accentColor,
        padding: '30px',
        border: 'none',
        color: 'white',
      },
    }
    
    return (
      <div style={s.btnWrapper}>
        <StripeCheckout
          invoiceId={invoice._id}
          token={this.onToken.bind(this)}
          stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
          amount={invoice.amount * 100}
          name={invoice.billFrom.name}
          description={invoice.description}
        >
        <button style={s.btn}>
          Submit Payment & Access Photos
        </button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(SubmitPayment);