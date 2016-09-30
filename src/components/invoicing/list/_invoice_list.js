import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import dateFormat from 'dateformat';
import { Link } from 'react-router';
import Universals from '../../universal_styles';
import Radium from 'radium';

@Radium
class InvoiceList extends Component {
  componentWillMount() {
    this.props.fetchInvoices();
    console.log(this.props.invoices);
  }
  
  handlePreviewClick(invoiceId) {
    console.log("Preview clicked for", invoiceId);
    
  }
  
  renderInvoices() {
    const s = {
      row: {
        textAlign: 'center',
        height: '60px',
        borderBottom: '1px solid #ccc',
        ':hover': {
          backgroundColor: '#efefef',
          cursor: "pointer"
        },
      },
      descriptionCol: {
        textAlign: 'left',
      },
      paidText: {
        color: '#07d007'
      },
      unpaidText: {
        color: '#ccc',
      },
      button: {
        "border": "none",
        "backgroundColor": Universals.accentColor,
        "borderRadius": "5px",
        "padding": "4px 10px",
        "color": "white",
        "fontSize": "16px",
        margin: '0 auto',
        textDecoration: 'none',
      }
    }
    
    if (this.props.invoices.length > 0) {
      return this.props.invoices.map((invoice) => {
        return (
          <tr style={s.row} key={invoice._id}>
            <td>{dateFormat(invoice.date, "m/d/yy")}</td>
            <td>{invoice.billTo ? invoice.billTo.name : ""}</td>
            <td style={s.descriptionCol}>{invoice.lineItems[0].item}</td>
            <td>${invoice.lineItems[0].amount}</td>
            <td>
              {invoice.paid ? 
                <span style={s.paidText} className="fa fa-usd"></span> : 
                <span style={s.unpaidText} className="fa fa-usd"></span> }
            </td>
            <td>
              <Link  style={s.button} to={"/invoices/" + invoice._id} target="_blank">Preview</Link>
            </td>
          </tr>
        );
      });
    }

  }
  
  render() {
    
    const s = {
      table: {
        fontSize: '18px',
        width: '100%',
      },
      thead: {
        color: Universals.dkGrey,
        borderBottom: '1px solid ' + Universals.dkGrey,
        
      },
      descriptionHeader: {
        textAlign: 'left',
      },
    }
    
    return (
      <table style={s.table}>
        <thead style={s.thead}>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th style={s.descriptionHeader}>Description</th>
            <th>Amount</th>
            <th>Paid</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={s.newInvoice} colSpan="6">
            </td>
          </tr>
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