import React, { PropTypes } from 'react'
require('../../../styles/invoicing/show.scss')

const DisplayLink = ({ invoice }) => {
  return (
    <div>
      <div className='display-link-wrapper'>
        <div className='title'>Thank You!</div>
        <div className='text'>
          Your photos can be accessed here:<br />
          <a href={invoice.shareUrl}>{invoice.shareUrl}</a>
        </div>
      </div>
    </div>
  )
}

DisplayLink.propTypes = {
  invoice: PropTypes.object
}

export default DisplayLink
