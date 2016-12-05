import React from 'react';
import dateFormat from 'dateformat';
require('../../../styles/invoicing/show.scss');

const LineItems = (props) => {
  
  return (
    <div className="line-items-wrapper">
      <div className="title">Invoice Detail</div>
      <div className="label">{dateFormat(props.invoice.date, "d mmm yyyy")}</div>
      <div className="line-item clearfix">
        <div className="description">{props.invoice.lineItems[0].item}</div>
        <div className="amount">${(props.invoice.lineItems[0].amount).toFixed(2)}</div>
      </div>
      <div className="total-wrapper">
        <span className="total-due">TOTAL DUE: ${props.invoice.paid ? "0" : (props.invoice.lineItems[0].amount).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default LineItems;