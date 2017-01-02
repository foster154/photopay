import React from 'react'
import { Link } from 'react-router'

const EmailButton = (props) => {
  const invoice = props.invoice
  const invoiceURL = `http://photopay.herokuapp.com/invoices/${invoice._id}`
  const emailSubject = 'Your Photos from Panoractives are Ready!'
  const emailBody =
    'Hi ' + invoice.billTo.name + ',\n\n' +
    'Thanks again for letting us shoot this home for you! Your photos are now ready. Please click the link below to see the invoice. Immediately after submitting payment you\'ll have the ability to access and download the photos.\n\n' +
    invoice.lineItems[0].item + ':\n' +
    invoiceURL + '\n\n' +
    'If you have any questions or need anything else please let me know!\n\nThank you,\n\nMark Foster\nPanoractives'

  const mailCode =
    'mailto:' +
    invoice.billTo.email +
    '?subject=' +
    encodeURI(emailSubject) +
    '&body=' +
    encodeURI(emailBody)

  return (
    <Link className='invoice-list-btn email-btn' to={mailCode} target='_blank'>Send Email</Link>
  )
}

EmailButton.propTypes = {
  invoice: React.PropTypes.object
}

export default EmailButton
