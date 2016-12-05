import React, { Component } from 'react';
import InvoiceList from './_invoice_list';
import { Link } from 'react-router';
require('../../../styles/invoicing/list.scss');

export default class Invoices extends Component {
  
  render() {
    return (
      <div className="invoices-wrapper">
        <Link to="/invoices/new" className="new-invoice-btn">
          New Invoice
        </Link>
        <h1>Invoices</h1>
        <InvoiceList />
      </div>
    );
  }
}