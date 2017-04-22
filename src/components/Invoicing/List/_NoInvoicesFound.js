import React from 'react'
import { Link } from 'react-router'

const NoInvoicesFound = () => (
  <tr>
    <td colSpan='7'>
      No invoices found. <Link to='/invoices/new'>Create one</Link>.
    </td>
  </tr>
)

export default NoInvoicesFound
