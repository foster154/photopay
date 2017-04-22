import React, { Component } from 'react'
import { Field } from 'redux-form'
require('../../styles/settings.scss')

class UserInfo extends Component {
  render () {
    return (
      <div className='settings-block photo-invoice-form'>
        <h2>Basic Info</h2>

        <fieldset>
          <label>Your First Name<sup>*</sup></label>
          <Field className='text-input' name='firstName' component='input' type='input' />
        </fieldset>

        <fieldset>
          <label>Your Last Name<sup>*</sup></label>
          <Field className='text-input' name='lastName' component='input' type='input' />
        </fieldset>

        <fieldset>
          <label>Company Name<sup>*</sup></label>
          <Field className='text-input with-subtext' name='companyName' component='input' type='input' />
          <span className='sub-input-text'>(Your customers will see this when paying an invoice)</span>
        </fieldset>

        <fieldset>
          <label>Email Address<sup>*</sup></label>
          <Field className='text-input with-subtext' name='displayEmail' component='input' type='input' />
          <span className='sub-input-text'>(Your customers will see this when paying an invoice)</span>
        </fieldset>

        <fieldset>
          <label>Phone Number</label>
          <Field className='text-input with-subtext' name='phone' component='input' type='input' />
          <span className='sub-input-text'>(Your customers will see this when paying an invoice)</span>
        </fieldset>

      </div>

    )
  }
}

export default UserInfo
