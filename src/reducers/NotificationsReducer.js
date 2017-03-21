import {
  CREATE_NOTIFICATON,
  CLEAR_NOTIFICATION
} from '../actions/types'

const INITIAL_STATE = {
  notifications: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NOTIFICATON:
      return { ...state, notifications: [...state.notifications, action.payload] }
    case CLEAR_NOTIFICATION:
      return { ...state, notifications: removeNotification(action.payload, state.notifications) }
  }
  return state
}

const removeNotification = (id, notifications) => {
  return notifications.reduce((prev, notification) => {
    if (notification.id !== id) {
      prev.push(notification)
    }
    return prev
  }, [])
}
