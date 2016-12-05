import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../../actions';
import dateFormat from 'dateformat';
import EmailButton from './_email_button';
require('../../../styles/invoicing/list.scss');

class InvoiceList extends Component {
  
  componentWillMount() {
    this.props.fetchInvoices();
    console.log(this.props.invoices);
  }
  
  renderInvoices() {  
    
    if (this.props.invoices.length > 0) {
      return this.props.invoices.map((invoice) => {
        return (
          <tr key={invoice._id}>
            <td>{dateFormat(invoice.date, "m/d/yy")}</td>
            <td>{invoice.invoiceNumber ? invoice.invoiceNumber : ""}</td>
            <td>{invoice.billTo ? invoice.billTo.name : ""}</td>
            <td className="text-left">{invoice.lineItems[0].item}</td>
            <td>${(invoice.lineItems[0].amount).toFixed(2)}</td>
            <td>
              {invoice.paid ? 
                <span className="fa fa-usd paid"></span> : 
                <span className="fa fa-usd unpaid"></span> }
            </td>
            <td>
              <Link className="invoice-list-btn preview-btn" to={"/invoices/" + invoice._id} target="_blank">Preview</Link>
            </td>
            <td>
              <EmailButton invoice={invoice} />
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td className="loading-graphic" colSpan="7"><span className="fa fa-refresh fa-spin"></span></td>
        </tr>
      );
    }
  }
  
  render() {
    
    return (
      <table className="invoices-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Invoice #</th>
            <th>Company</th>
            <th className="text-left">Description</th>
            <th>Amount</th>
            <th>Paid</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.renderInvoices()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoicing.invoices };
}

export default connect(mapStateToProps, actions)(InvoiceList);


