import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice } from '../../../actions';
import { fetchCustomers } from '../../../actions/customers';
import Select from 'react-select';
import CustomerSelect from './_customer_select';
import { normalizeShareUrl } from './_normalize_share_url';
require('../../../styles/invoicing/form.scss');

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
    if (this.props.errorMessage) {
      return <div className="msg-red">{this.props.errorMessage}</div>
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
      <div className="invoice-form-wrapper">
        <h1 className="text-center">New Invoice</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          <div className="clearfix">
            <fieldset className="customer-field">
              <label htmlFor="customer">Customer:</label>
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
            <fieldset className="invoice-number-field">
              <label htmlFor="invoiceNumber">Invoice #:</label>
              <Field className="text-input" name="invoiceNumber" component="input" type="input" />
            </fieldset>
          </div>

          <h2 className="text-center">Items</h2>
          <div className="clearfix">
            <div className="clearfix">
              <fieldset className="item-field">
                <label>Item:</label>
                <Field className="text-input" name="item" component="input" type="input" />
              </fieldset>
              <fieldset className="amount-field">
                <label>Amount:</label>
                <Field className="text-input" name="amount" component="input" type="input" />
              </fieldset>
            </div>
            <div className="clearfix">
              <div className="total-label">Total:</div>
              <div className="total-amount">${}</div>
            </div>
          </div>
          
          <h2 className="text-center">After Payment Has Been Received</h2>
          <fieldset>
            <label>Share This Link:</label>
            <Field className="text-input" name="shareUrl" component="input" type="input" />
          </fieldset>
          <fieldset>
            <Field name="displayShareLinkImmediately" component="input" type="checkbox"/>
            Display share link immediately (even before payment has been received)
            <br />
            <Field name="paid" component="input" type="checkbox"/>
            Mark invoice as paid
            <br />
          </fieldset>

          <button className="save-btn clearfix" action="submit">Save Invoice</button>
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
