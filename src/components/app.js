import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from './Header.js'
import Notification from './Shared/Notification'

class App extends Component {
  renderNotifications () {
    const { notifications } = this.props
    if (notifications) {
      return notifications.map(notification => {
        return <Notification key={notification.id} message={notification.message} color={notification.color} />
      })
    }
  }

  render () {
    return (
      <div>
        <Header />
        { this.renderNotifications() }
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications.notifications
  }
}

App.propTypes = {
  children: PropTypes.object,
  notifications: PropTypes.array
}

export default connect(mapStateToProps)(App)
