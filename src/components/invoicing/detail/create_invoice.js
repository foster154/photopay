import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice } from '../../../actions';
import { fetchCustomers } from '../../../actions/customers';
import Universals from '../../universal_styles';
import Radium from 'radium';
import Select from 'react-select';
import CustomerSelect from './_customer_select';
import { normalizeShareUrl } from './_normalize_share_url';

@Radium
class CreateInvoice extends Component {
  
  componentWillMount() {
    this.props.fetchCustomers();
  }
  
  handleFormSubmit(formProps) {
    
    const validShareUrl = normalizeShareUrl(formProps.shareUrl);
    
    const expandedFormProps = {
      customerName: this.props.customerList[formProps.customer - 1].name,
      customerEmail: this.props.customerList[formProps.customer - 1].email,
      invoiceNumber: formProps.invoiceNumber,
      item: formProps.item,
      amount: formProps.amount,
      shareUrl: validShareUrl,
      displayShareLinkImmediately: formProps.displayShareLinkImmediately,
      paid: formProps.paid,
    };
    console.info("expandedFormProps", expandedFormProps);
    this.props.createInvoice(expandedFormProps);
  }
  
  renderAlert() {
    const s = { msgRed: Universals.msgRed }
    if (this.props.errorMessage) {
      return <div style={s.msgRed}>{this.props.errorMessage}</div>
    }
  }
  
  render() {
    
    const { hasCustomerValue, customerValue, handleSubmit } = this.props;
      
    let customerOptions = [ {} ];
      
    if (this.props.customerList.length > 0) {
      customerOptions = this.props.customerList.map(function(customer, index) {
        return { value: index + 1, label: customer.name }
      });
      console.log("customerOptions", customerOptions);
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
            <label htmlFor="customer" style={s.label}>Customer:</label>
            <Field
              name="customer"
              component={props =>
                <CustomerSelect
                  {...props}
                  options={customerOptions}
                  clearable={false}
                />
              }
            />
          </fieldset>
          <fieldset style={s.invoiceNumField}>
            <label htmlFor="invoiceNumber" style={s.label}>Invoice #:</label>
            <Field style={s.textInput} name="invoiceNumber" component="input" type="input" />
          </fieldset>
        </div>

        <h2 style={{textAlign: 'center'}}>Items</h2>
        <div className="clearfix">
          <div className="clearfix">
            <fieldset style={s.itemField}>
              <label style={s.label}>Item:</label>
              <Field style={s.textInput} name="item" component="input" type="input" />
            </fieldset>
            <fieldset style={s.amountField}>
              <label style={s.label}>Amount:</label>
              <Field style={s.textInput} name="amount" component="input" type="input" />
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
          <Field style={s.textInput} name="shareUrl" component="input" type="input" />
        </fieldset>
        <fieldset>
          <Field name="displayShareLinkImmediately" component="input" type="checkbox"/>
          Display share link immediately (even before payment has been received)
          <br />
          <Field name="paid" component="input" type="checkbox"/>
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

const form = reduxForm({
  form: 'createInvoice'
});

export default connect(mapStateToProps, { createInvoice, fetchCustomers })(form(CreateInvoice))

// Styles
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
  custInput: {
    width: '100%'
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