import React, { PropTypes} from 'react'
import { Link } from 'react-router'
import EmailButton from './_EmailButton'
import dateFormat from 'dateformat'

const InvoiceListEntry = ({ invoice }) => {
  const rowClasses = invoice.paid ? 'invoice-paid' : 'invoice-unpaid'

  return (
    <tr key={invoice._id} className={rowClasses}>
      <td>
        {invoice.paid
          ? <span className='fa fa-check paid' />
          : <span className='fa fa-close unpaid' /> }
      </td>
      <td>{dateFormat(invoice.date, 'm/d/yy')}</td>
      <td>{invoice.invoiceNumber ? invoice.invoiceNumber : null}</td>
      <td className='text-left'>{invoice.customer.customerName}</td>
      <td className='text-left'>{invoice.lineItems[0].item}</td>
      <td>${invoice.totalAmount}</td>
      <td className='invoice-list-actions'>
        <Link className='invoice-list-btn preview-btn' to={'/' + invoice._id} target='_blank'>
          <span className='fa fa-eye' />
        </Link>
        <Link className='invoice-list-btn edit-btn' to={'/invoices/edit/' + invoice._id}>
          <span className='fa fa-pencil' />
        </Link>
        <EmailButton invoice={invoice} />
      </td>
    </tr>
  )
}

InvoiceListEntry.propTypes = {
  invoice: PropTypes.object
}

export default InvoiceListEntry
