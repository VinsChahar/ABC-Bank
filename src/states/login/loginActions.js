import axios from 'axios';
import filter from 'lodash/fp/filter';
import isEmpty from 'lodash/fp/isEmpty';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGOUT_USER_SUCCESS,
} from './loginTypes';


export const fetchUsers = ({ userName, password }) => {
  return (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    axios
      .get('http://localhost:3004/user')
      .then(response => {
        const { data } = response;
        const user = filter({ 'userName': userName, 'password': password }, data);
        isEmpty(user) ?
          dispatch(fetchUsersFailure('User name and password are incorrect.')) :
          dispatch(fetchUsersSuccess(user))
        const login = getState().login;
        localStorage.setItem('USER_INFO', JSON.stringify(login));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('USER_INFO');
    dispatch(logoutUsersSuccess());
  }
}

export const logoutUsersSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS
  }
}