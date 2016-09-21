import React, { Component } from 'react';
import { connect } from 'react-redux';
import Universals from '../../universal_styles';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../../../actions';
import { 
  API_URL,
  STRIPE_PUBLISHABLE_KEY,
} from '../../../../config.js'; 

class SubmitPayment extends Component {
  
  
  // onToken = (token) => {
  //   //const chargeURL = `${API_URL}/invoices/57c207e0a98173774f3328bb/charge`;
  //   const chargeURL = `${API_URL}/invoices/57c207e0a98173774f3328bb/charge`;
  //   fetch(chargeURL, {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(token => {
  //     alert(`We are in business, ${token.email}`);
  //   });
  // }
  
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
          stripeKey={STRIPE_PUBLISHABLE_KEY}
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