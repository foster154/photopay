import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import dateFormat from 'dateformat';

class InvoiceList extends Component {
  componentWillMount() {
    this.props.fetchInvoices();
  }
  
  renderInvoices() {
    return this.props.invoices.map((invoice) => {
      return (
        <tr className="invoice" key={invoice._id}>
          <td>{dateFormat(invoice.date, "m/d/yy")}</td>
          <td>{invoice.description}</td>
          <td>${invoice.amount}</td>
        </tr>
      );
    });
  }
  
  render() {
    return (
      <div>
        <h2>Invoices</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInvoices()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { invoices: state.invoicing.invoices };
}

export default connect(mapStateToProps, actions)(InvoiceList);