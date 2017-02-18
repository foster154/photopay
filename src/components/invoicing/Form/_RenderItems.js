import React from 'react'
import { Field } from 'redux-form'

const RenderItems = ({ fields, meta: { touched, error } }) => (
  <ul className='lineItems'>
    {fields.map((lineItem, index) =>
      <li key={index} className='lineItem'>
        <fieldset className='item-field'>
          <label>Item</label>
          <Field className='text-input' name={`${lineItem}.item`} component='input' type='text' />
        </fieldset>
        <fieldset className='amount-field'>
          <label>Amount:</label>
          <Field className='text-input' name={`${lineItem}.amount`} component='input' type='text' />
        </fieldset>
        <button
          className='delete-item-btn'
          type='button'
          title='Remove Member'
          onClick={() => fields.remove(index)}>
          <span className='fa fa-close' />
        </button>
      </li>
    )}
    <li>
      <button className='add-item-btn' type='button' onClick={() => fields.push({})}>Add Item</button>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
)

RenderItems.propTypes = {
  fields: React.PropTypes.object,
  meta: React.PropTypes.object
}

export default RenderItems
