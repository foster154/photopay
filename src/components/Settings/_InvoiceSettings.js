import React, { Component } from 'react'
import { Field } from 'redux-form'
require('../../styles/settings.scss')

class InvoiceSettings extends Component {
  render () {
    return (
      <div className='settings-block photo-invoice-form'>
        <h2>Invoice Settings</h2>
        <fieldset>
          <label>Begin Invoice Numbering From:</label>
          <Field className='text-input with-subtext' name='currentInvoiceNumber' component='input' type='input' />
          <span className='sub-input-text'>(Change this if you’d like future invoice numbers to increment from a different starting value)</span>
        </fieldset>
      </div>
    )
  }
}

export default InvoiceSettings
