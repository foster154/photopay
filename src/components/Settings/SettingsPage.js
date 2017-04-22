import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchSettings, saveSettings } from '../../actions'
import UserInfo from './_UserInfo'
import InvoiceSettings from './_InvoiceSettings'
import Spinner from '../Shared/Spinner'
require('../../styles/settings.scss')

class SettingsPage extends Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount () {
    this.props.fetchSettings()
  }

  handleFormSubmit (formProps) {
    this.props.saveSettings(formProps)
  }

  render () {
    const { handleSubmit, fetching } = this.props

    return (
      <div className='page-wrapper settings-page'>
        <h1>Settings</h1>
        {
          fetching
          ? <Spinner />
          : <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            {
              this.props.saving
              ? <button className='btn-primary clearfix save-settings-btn' action='submit'><span className='fa fa-spin fa-spinner' /></button>
              : <button className='btn-primary clearfix save-settings-btn' action='submit'>Save</button>
            }

            <div className='settings-block-section'>
              <UserInfo />
              <InvoiceSettings />
            </div>
          </form>

        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    initialValues: state.settings.userSettings,
    fetching: state.settings.fetching,
    saving: state.settings.saving
  }
}

const form = reduxForm({
  form: 'settingsForm',
  enableReinitialize: true
})

SettingsPage.propTypes = {
  // mapStateToProps
  fetching: PropTypes.bool,
  saving: PropTypes.bool,
  // Redux Action creators
  fetchSettings: PropTypes.func,
  saveSettings: PropTypes.func,
  // from Redux form
  handleSubmit: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchSettings, saveSettings })(form(SettingsPage))
