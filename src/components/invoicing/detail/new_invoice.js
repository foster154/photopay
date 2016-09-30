import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createInvoice } from '../../../actions';
import { fetchCustomers } from '../../../actions/customers';
import Universals from '../../universal_styles';
import Radium from 'radium';
import Select from 'react-select';

@Radium
class NewInvoice extends Component {
  
  componentWillMount() {
    this.props.fetchCustomers();
  }
  
  handleFormSubmit({ invoiceNumber, customer, item, amount, shareLink, displayShareLinkImmediately, paid }) {
    console.log(customer);
    this.props.createInvoice({ 
      invoiceNumber, 
      customer,
      item, 
      amount, 
      shareLink,
      displayShareLinkImmediately,
      paid,
    });
  }
  
  renderAlert() {
    
    const s = {
      msgRed: Universals.msgRed
    }
    
    if (this.props.errorMessage) {
      return (
        <div style={s.msgRed}>
          {this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    
    const s = {
      wrapper: {
        width: '800px',
        maxWidth: '96%',
        margin: '30px auto',
      },
      label: {
        color: Universals.dkGrey,
        fontWeight: '600',
      },
      textInput: {
        "width": "100%",
        "padding": "8px",
        "borderRadius": "5px",
        "border": "1px solid #ccc",
        "fontSize": "18px",
        marginBottom: "10px",
      },
      customerField: {
        width: '78%',
        float: 'left',
        marginRight: '2%',
        '@media (max-width: 600px)': {
          width: '100%',
        }
      },
      invoiceNumField: {
        float: 'right',
        width: '20%',
        '@media (max-width: 600px)': {
          width: '100%',
        }
      },
      itemField: {
        width: '78%',
        float: 'left',
        marginRight: '2%',
        '@media (max-width: 600px)': {
          width: '100%',
        }
      },
      amountField: {
        width: '20%',
        float: 'right',
        '@media (max-width: 600px)': {
          width: '100%',
        }
      },
      totalLabel: {
        color: Universals.accentColor,
        float: 'left',
        width: '78%',
        marginRight: '2%',
        textAlign: 'right',
        fontWeight: '600',
        paddingTop: '14px',
        '@media (max-width: 600px)': {
          width: '42%',
        }
      },
      totalAmount: {
        color: Universals.accentColor,
        fontSize: '2em',
        float: 'right',
        width: '20%',
        '@media (max-width: 600px)': {
          width: '56%',
        }
      },
      button: {
        display: 'block',
        margin: '40px auto',
        "border": "none",
        "backgroundColor": Universals.accentColor,
        "borderRadius": "5px",
        "padding": "20px 60px",
        "color": "white",
      },
    }
    
    const { handleSubmit, fields: 
      { 
        invoiceNumber,
        customer, 
        item, 
        amount, 
        shareLink,
        displayShareLinkImmediately,
        paid,
      }} = this.props;
      
    let customerOptions = [ {value: null, label: 'Loading...'} ];
      
    if (this.props.customerList.length > 0) {
      customerOptions = this.props.customerList.map(function(customer) {
          return {value: {name: customer.name, email: customer.email}, label: customer.name}
          // TODO: Fix this so that the customer name displays after being selected.
        });
    }
    
    return (
      <div style={s.wrapper}>
      <h1 style={{textAlign: 'center'}}>New Invoice</h1>
      <form 
        style={s.form}
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
        <div className="clearfix">
          <fieldset style={s.customerField}>
            <label style={s.label}>Customer:</label>
            <Select
              {...customer}
              onBlur={() => customer.onBlur(customer.email)}  // https://github.com/erikras/redux-form/issues/1185
              name="Customer"
              options={customerOptions}
            />
          </fieldset>
          <fieldset style={s.invoiceNumField}>
            <label style={s.label}>Invoice #:</label>
            <input style={s.textInput} {...invoiceNumber}/>
          </fieldset>
        </div>

        <h2 style={{textAlign: 'center'}}>Items</h2>
        <div className="clearfix">
          <div className="clearfix">
            <fieldset style={s.itemField}>
              <label style={s.label}>Item:</label>
              <input style={s.textInput} {...item} />
            </fieldset>
            <fieldset style={s.amountField}>
              <label style={s.label}>Amount:</label>
              <input 
                style={s.textInput} 
                {...amount} />
            </fieldset>
          </div>
          <div className="clearfix" style={s.totalAmountFields}>
            <div style={s.totalLabel}>Total:</div>
            <div style={s.totalAmount}>${}</div>
          </div>
        </div>
        
        <h2 style={{textAlign: 'center'}}>After Payment Has Been Received</h2>
        <fieldset>
          <label style={s.label}>Share This Link:</label>
          <input style={s.textInput} {...shareLink} />
        </fieldset>
        <fieldset>
          <input type="checkbox" value="displayShareLinkImmediately" checked="false" {...displayShareLinkImmediately} /> 
            Display share link immediately (even before payment has been received)
            <br />
          <input type="checkbox" value="Mark invoice as paid" {...paid} />
            Mark invoice as paid
            <br />
        </fieldset>

        <button className="clearfix" style={s.button} action="submit">Save Invoice</button>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { customerList: state.customers.customerList };
}

export default reduxForm({
  form: 'createInvoice',
  fields: 
  [
    'invoiceNumber', 
    'customer',
    'item', 
    'amount', 
    'shareLink',
    'displayShareLinkImmediately',
    'paid'
  ]
}, mapStateToProps, { createInvoice, fetchCustomers })(NewInvoice);