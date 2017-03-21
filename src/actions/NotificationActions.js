import {
  CREATE_NOTIFICATON,
  CLEAR_NOTIFICATION
} from './types'

export const createNotification = ({ message, color, displayTime }) => {  // displayTime should be in seconds
  return dispatch => {
    const id = createId()

    dispatch({
      type: CREATE_NOTIFICATON,
      payload: { id, message, color }
    })

    setTimeout(() => {
      dispatch(clearNotification(id))
    }, displayTime * 1000)
  }
}

const createId = () => {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 20; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

const clearNotification = id => {
  return {
    type: CLEAR_NOTIFICATION,
    payload: id
  }
}
