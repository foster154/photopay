import React from 'react';
require('../../../styles/invoicing/show.scss');

const CompanyInfo = (props) => {
  
  let billFrom = props.invoice.billFrom;
  let billTo = props.invoice.billTo;
  return (
    <div className="company-info-wrapper">
      <div className="float-left">
        <div className="label">INVOICE FROM</div>
        <div className="name">{billFrom.name}</div>
        <div className="info">{billFrom.email}</div>
        <div className="info">{billFrom.phone}</div>
      </div>
      <div className="float-right text-right">
        <div className="label">BILL TO</div>
        <div className="name">{billTo.name}</div>
        <div className="info">{billTo.email}</div>
        <div className="info">{billTo.phone}</div>
      </div>
    </div>
  );
}

export default CompanyInfo;