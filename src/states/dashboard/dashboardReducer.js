import {
  SELECT_INDEX_SUCCESS,
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE
} from './dashboardTypes'

const initialState = {
  selectedIndex: 0,
  accountSummary: {},
  error: ''
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INDEX_SUCCESS:
      return {
        ...state,
        selectedIndex: action.payload
      }
    case FETCH_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        accountSummary: action.payload,
        error: ''
      }
    case FETCH_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        accountSummary: {},
        error: action.payload
      }
    default: return state
  }
}

export default dashboardReducer