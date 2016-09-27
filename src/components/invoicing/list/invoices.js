import React, { Component } from 'react';
import InvoiceList from './_invoice_list';
import { Link } from 'react-router';
import Universals from '../../universal_styles';
import Radium from 'radium';

export default class Invoices extends Component {
  
  render() {
    
    const s = {
      wrapper: {
        width: '90%',
        margin: '0 auto',
        position: 'relative',
      },
      button: {
        position: 'absolute',
        display: 'inline-block',
        right: '0',
        "border": "1px solid " + Universals.accentColor,
        "borderRadius": "5px",
        "padding": "12px 20px",
        "color": Universals.accentColor,
        "fontSize": "16px",
        textDecoration: 'none',
        margin: '10px 0',
      },
      pageTitle: {
        textAlign: 'center',
        clear: 'both',
        margin: '35px 0',
      },
    }
    return (
      <div style={s.wrapper}>
        <Link to="/invoices/new" style={s.button}>
          New Invoice
        </Link>
        <h2 style={s.pageTitle}>Invoices</h2>
        <InvoiceList />
      </div>
    );
  }
}