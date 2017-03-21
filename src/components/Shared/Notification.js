import React, { PropTypes } from 'react'
require('../../styles/_notifications.scss')

const Notification = ({message, color}) => {
  return (
    <div className={`notification notification-${color}`}>
      {message}
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Notification
