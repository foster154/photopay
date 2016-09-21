import React from 'react';
import dateFormat from 'dateformat';
import Universals from '../../universal_styles';

const LineItems = (props) => {
  
  const styles = {
    lineItems: {
      clear: 'both',
      marginTop: '85px',
      padding: '30'
    },
    sectionTitle: {
      color: Universals.accentColor,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: '14px',
      fontWeight: '700'
    },
    label: {
      fontWeight: '700',
      fontSize: '12',
      color: Universals.dkGrey,
      marginTop: '20px'
    },
    lineItem: {
      marginTop: '4px',
      color: Universals.dkGrey,
      fontSize: '20px',
      fontWeight: '300'
    },
    description: {
      float: 'left'
    },
    amount: {
      float: 'right'
    },
    clear: {
      clear: 'both',
    },
    totalWrapper: {
      textAlign: 'center',
      marginTop: '40px'
    },
    totalDue: {
      display: 'inline-block',
      padding: '14px 20px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: Universals.accentColor,
      fontWeight: '700',
      fontSize: '18px',
      color: Universals.dkGrey
    }
  }
  
  return (
    <div style={styles.lineItems}>
      <div style={styles.sectionTitle}>Invoice Detail</div>
      <div style={styles.label}>{dateFormat(props.invoice.date, "d mmm yyyy")}</div>
      <div style={styles.lineItem}>
        <div style={styles.description}>{props.invoice.description}</div>
        <div style={styles.amount}>${props.invoice.amount}</div>
      </div>
      <div style={styles.clear}></div>
      <div style={styles.totalWrapper}>
        <span style={styles.totalDue}>TOTAL DUE: ${props.invoice.amount}</span>
      </div>
    </div>
  );
}

export default LineItems;