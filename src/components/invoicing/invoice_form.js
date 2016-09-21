import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class InvoiceForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { displayForm: false };
    this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  toggleDisplayForm() {
    this.setState( {displayForm: !this.state.displayForm });
  }
  
  handleFormSubmit({ description, amount }) {
    // call action creator to sign up user
    // this.props.signupUser(formProps);
    console.log(description, amount);
    this.props.createInvoice({ description, amount });
    this.toggleDisplayForm();
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    const { handleSubmit, fields: { description, amount }} = this.props;
    
    if (this.state.displayForm) {
      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset className="form-group">
            <label>Description:</label>
            <input {...description} className="form-control" />
            {description.touched && description.error && <div className="error">{description.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Amount:</label>
            <input {...amount} className="form-control" />
            {amount.touched && amount.error && <div className="error">{amount.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Create</button>
          <span onClick={this.toggleDisplayForm} className="btn btn-primary">Cancel</span>
        </form>
      );
    } else {
      return (
        <span 
          className="new-invoice-btn btn btn-primary" 
          onClick={this.toggleDisplayForm}>
          Create Invoice
        </span>
      );
    }
  }
}

function validate(formProps) {
  const errors = {};
  
  if (!formProps.description) {
    errors.email = 'Please enter a description';
  }
  
  if (!formProps.amount) {
    errors.amount = 'Please enter an amount';
  }
  
  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.invoicing.error}
}

export default reduxForm({
  form: 'createInvoice',
  fields: ['description', 'amount'],
  validate
}, mapStateToProps, actions)(InvoiceForm);








