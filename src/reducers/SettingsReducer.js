import {
  FETCH_USER_START,
  UPDATE_USER_SETTINGS,
  FETCH_USER_FAIL,
  SAVE_USER_START,
  SAVE_USER_FAIL
} from '../actions/types'

const INITIAL_STATE = {
  fetching: false,
  saving: false,
  userSettings: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { ...state, fetching: true }
    case UPDATE_USER_SETTINGS:
      return { ...state, fetching: false, saving: false, userSettings: action.payload }
    case FETCH_USER_FAIL:
      return { ...state, fetching: false, userSettings: {} }
    case SAVE_USER_START:
      return { ...state, saving: true }
    case SAVE_USER_FAIL:
      return { ...state, saving: false }
  }
  return state
}
