import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const renderContactName = (firstName, lastName) => {
  let fullName = ''
  firstName ? fullName += firstName : null
  firstName && lastName ? fullName += ' ' : null
  lastName ? fullName += lastName : null
  return fullName
}

const CustomerRow = ({ customer }) => {
  const { customerName, email, contactFirstName, contactLastName } = customer
  return (
    <tr>
      <td className='customer'>
        <div className='customerName'>{customerName}</div>
        <div className='contactName'>
          { renderContactName(contactFirstName, contactLastName) }
        </div>
      </td>
      <td className='email'>{email}</td>
      <td className='actions'>
        <Link className='customer-list-btn edit-btn' to={'/customers/edit/' + customer._id}>
          <span className='fa fa-pencil' />
        </Link>
      </td>
    </tr>
  )
}

CustomerRow.propTypes = {
  customer: PropTypes.object
}

export default CustomerRow
