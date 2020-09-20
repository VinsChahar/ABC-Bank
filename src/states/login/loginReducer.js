import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGOUT_USER_SUCCESS
} from './loginTypes'

const defaultState = {
  loading: false,
  isLoggedin: false,
  users: [],
  error: ''
}

const userInfo = JSON.parse(localStorage.getItem('USER_INFO'));

const initialState = userInfo ? { ...defaultState, isLoggedin: userInfo.isLoggedin, users: { ...userInfo.users } } : defaultState;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        isLoggedin: true,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...defaultState
      }
    default: return state
  }
}

export default loginReducer