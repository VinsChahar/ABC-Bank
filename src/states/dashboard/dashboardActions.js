import axios from 'axios';
import filter from 'lodash/fp/filter';
import isEmpty from 'lodash/fp/isEmpty';
import {
  SELECT_INDEX_SUCCESS,
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE,
} from './dashboardTypes';


export const selectIndex = index => {
  return (dispatch) => {
    dispatch(setSelectedIndex(index));
  }
}

export const setSelectedIndex = index => {
  return {
    type: SELECT_INDEX_SUCCESS,
    payload: index
  }
}

export const fetchAccountDetails = ({ userName, password }) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get('http://localhost:3004/user')
      .then(response => {
        const { data } = response;
        const user = filter({ 'userName': userName, 'password': password }, data);
        isEmpty(user) ?
          dispatch(fetchUsersFailure('User not found')) :
          dispatch(fetchUsersSuccess(user))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_DASHBOARD_DATA_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_DASHBOARD_DATA_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_DASHBOARD_DATA_FAILURE,
    payload: error
  }
}
