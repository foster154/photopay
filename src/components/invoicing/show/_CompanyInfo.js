import React, { PropTypes } from 'react'
require('../../../styles/invoicing/show.scss')

const CompanyInfo = ({ invoice }) => {
  const {customer} = invoice
  console.log({invoice})

  return (
    <div className='company-info-wrapper'>
      <div className='float-left'>
        <div className='label'>INVOICE FROM</div>
        <div className='name'>Panoractives</div>
        <div className='info'>info@panoractives.com</div>
        {/* <div className='info'>208-220-4905</div> */}
      </div>
      <div className='float-right text-right'>
        <div className='label'>BILL TO</div>
        <div className='name'>{customer.customerName}</div>
        <div className='info'>
          {customer.contactFirstName} {customer.contactLastName}
        </div>
        <div className='info'>{customer.email}</div>
        <div className='info'>{customer.phone}</div>
      </div>
    </div>
  )
}

CompanyInfo.propTypes = {
  invoice: PropTypes.object
}

export default CompanyInfo
