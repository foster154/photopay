import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (formProps) {
    this.props.signupUser(formProps)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    // these are the redux form helpers (?)
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input className='form-control' {...email} />
          {email.touched && email.error && <div className='error'>{email.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input className='form-control' {...password} type='password' />
          {password.touched && password.error && <div className='error'>{password.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>Confirm Password:</label>
          <input className='form-control' {...passwordConfirm} type='password' />
          {passwordConfirm.touched && passwordConfirm.error && <div className='error'>{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign up!</button>
      </form>
    )
  }
}

// ReduxForm gives validate() an object of field: value upon every change to any field
function validate (formProps) {
  const errors = {}

  if (!formProps.email) {
    errors.email = 'Please enter an email'
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password'
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation'
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  return errors
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

Signup.propTypes = {
  errorMessage: PropTypes.string,           // mapStateToProps
  signupUser: PropTypes.func,               // Redux action creator
  handleSubmit: PropTypes.func,             // redux-form
  fields: PropTypes.object                  // redux-form
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup)
