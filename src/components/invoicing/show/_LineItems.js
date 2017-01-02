import React from 'react'
import dateFormat from 'dateformat'
require('../../../styles/invoicing/show.scss')

const LineItems = ({ invoice }) => {
  return (
    <div className='line-items-wrapper'>
      <div className='title'>Invoice Detail</div>
      <div className='label'>{dateFormat(invoice.date, 'd mmm yyyy')}</div>
      <div className='line-item clearfix'>
        <div className='description'>{invoice.lineItems[0].item}</div>
        <div className='amount'>${(invoice.lineItems[0].amount).toFixed(2)}</div>
      </div>
      <div className='total-wrapper'>
        <span className='total-due'>
          TOTAL DUE: ${invoice.paid
            ? '0'
            : (invoice.lineItems[0].amount).toFixed(2)}
        </span>
      </div>
    </div>
  )
}

LineItems.propTypes = {
  invoice: React.PropTypes.object
}

export default LineItems
