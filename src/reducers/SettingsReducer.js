import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  SAVE_USER_START,
  SAVE_USER_SUCCESS,
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
    case FETCH_USER_SUCCESS:
      return { ...state, fetching: false, userSettings: action.payload }
    case FETCH_USER_FAIL:
      return { ...state, fetching: false, userSettings: {} }
    case SAVE_USER_START:
      return { ...state, saving: true }
    case SAVE_USER_SUCCESS:
      return { ...state, saving: false, userSettings: action.payload }
    case SAVE_USER_FAIL:
      return { ...state, saving: false }
  }
  return state
}
