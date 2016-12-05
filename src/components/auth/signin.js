import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
require('../../styles/auth/signin.scss');

const form = reduxForm({
  form: 'Signin'
});

class Signin extends Component {
  
  handleFormSubmit(formProps) {
    this.props.signinUser(formProps);
  }
  
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="msg-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }
  
  render() {
    
    const { handleSubmit } = this.props;
    
    return (
      <div className="signin-background">
        <div className="overlay">
          <form className="clearfix" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <h2>Sign In</h2>
            {this.renderAlert()}
            <fieldset>
              <label htmlFor="email">Email:</label>
              <Field className="signin-input" name="email" component="input" type="input" />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password:</label>
              <Field className="signin-input" name="password" component="input" type="password" />
            </fieldset>
            <button action="submit">Sign In</button>
          </form>
          
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(form(Signin));


