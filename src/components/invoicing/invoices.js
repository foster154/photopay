import React, { Component } from 'react';
import InvoiceForm from './invoice_form';
import InvoiceList from './invoice_list';

export default class Invoices extends Component {
  
  render() {
    return (
      <div>
        <InvoiceForm displayForm={true} />
        <InvoiceList />
      </div>
    );
  }
}