import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signinUser } from '../../actions'
require('../../styles/auth/signin.scss')

const form = reduxForm({
  form: 'Signin'
})

class Signin extends Component {
  constructor (props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit (formProps) {
    this.props.signinUser(formProps)
  }

  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className='msg-red'>
          {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div className='signin-background'>
        <form className='clearfix floating-label' onSubmit={handleSubmit(this.handleFormSubmit)}>
          <h1>Sign In</h1>
          {this.renderAlert()}
          <div className='styled-input wide'>
            <Field name='email' component='input' type='text' required />
            <label>Email</label>
            <span />
          </div>
          <div className='styled-input wide'>
            <Field name='password' component='input' type='password' required />
            <label>Password</label>
            <span />
          </div>
          <button className='btn-primary' action='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error }
}

Signin.propTypes = {
  errorMessage: PropTypes.string,         // mapStateToProps
  signinUser: PropTypes.func,             // Redux action creator
  handleSubmit: PropTypes.func            // redux-form
}

export default connect(mapStateToProps, { signinUser })(form(Signin))
