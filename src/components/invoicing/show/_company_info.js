import React, { Component } from 'react';
import Universals from '../../universal_styles';

const CompanyInfo = (props) => {
  
  const styles = {
    companyInfo: {
      padding: '30'
    },
    billFrom: {
      float: 'left'
    },
    billTo: {
      float: 'right',
      textAlign: 'right'
    },
    label: {
      fontWeight: '700',
      fontSize: '12',
      color: Universals.dkGrey
    },
    name: {
      fontSize: '24',
      color: Universals.medGrey
    },
    info: {
      fontSize: '13',
      fontWeight: '300',
      color: Universals.medGrey
    }
  }
  
  let billFrom = props.invoice.billFrom;
  let billTo = props.invoice.billTo;
  return (
    <div className="company-info" style={styles.companyInfo}>
      <div className="billFrom" style={styles.billFrom}>
        <div style={styles.label}>INVOICE FROM</div>
        <div style={styles.name}>{billFrom.name}</div>
        <div style={styles.info}>{billFrom.email}</div>
        <div style={styles.info}>{billFrom.phone}</div>
      </div>
      <div className="billTo" style={styles.billTo}>
        <div style={styles.label}>BILL TO</div>
        <div style={styles.name}>{billTo.name}</div>
        <div style={styles.info}>{billTo.email}</div>
        <div style={styles.info}>{billTo.phone}</div>
      </div>
    </div>
  );
}

export default CompanyInfo;