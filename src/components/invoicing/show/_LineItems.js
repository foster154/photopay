import React from 'react'
import dateFormat from 'dateformat'
require('../../../styles/invoicing/show.scss')

const renderLineItems = (lineItems) => {
  return lineItems.map(lineItem => {
    return (
      <div key={lineItem._id} className='line-item clearfix'>
        <div className='description'>{lineItem.item}</div>
        <div className='amount'>${lineItem.amount.toFixed(2)}</div>
      </div>
    )
  })
}

const LineItems = ({ invoice }) => {
  return (
    <div className='line-items-wrapper'>
      <div className='title'>Invoice Detail</div>
      <div className='label'>{dateFormat(invoice.date, 'd mmm yyyy')}</div>

      { renderLineItems(invoice.lineItems) }

      <div className='total-wrapper'>
        <span className='total-due'>
          TOTAL DUE: ${invoice.paid
            ? '0'
            : (invoice.totalAmount).toFixed(2)}
        </span>
      </div>
    </div>
  )
}

LineItems.propTypes = {
  invoice: React.PropTypes.object
}

export default LineItems
