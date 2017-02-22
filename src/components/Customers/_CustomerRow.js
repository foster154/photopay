import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const CustomerRow = ({ customer }) => {
  const { customerName, email, contactFirstName, contactLastName } = customer
  return (
    <tr>
      <td className='customer'>
        <div className='customerName'>{customerName}</div>
        <div className='contactName'>{`${contactFirstName} ${contactLastName}`}</div>
      </td>
      <td className='email'>{email}</td>
      <td className='actions'>
        <Link className='customer-list-btn edit-btn' to={'/' + customer._id} target='_blank'>
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
