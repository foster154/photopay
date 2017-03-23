import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../../../actions'
require('../../../styles/invoicing/show.scss')

class SubmitPayment extends Component {
  constructor (props) {
    super(props)
    this.onToken = this.onToken.bind(this)
  }

  onToken (token) {
    this.props.createCharge(token, this.props.invoice._id)
  }

  render () {
    const invoice = this.props.invoice

    return (
      <div className='submit-payment-wrapper'>
        <StripeCheckout
          invoiceId={invoice._id}
          token={this.onToken}
          stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
          amount={invoice.totalAmount * 100}
          name='Panoractives'
          description={invoice.lineItems[0].item}
        >
          <button>
            Submit Payment & Access Photos
          </button>
        </StripeCheckout>

        <div className='text'>(You'll receive access to the entire photo collection immediately after payment has been made.)</div>
      </div>
    )
  }
}

SubmitPayment.propTypes = {
  createCharge: PropTypes.func,     // Redux action creator
  invoice: PropTypes.object         // from component declaration
}

export default connect(null, actions)(SubmitPayment)
