import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import dashboardReducer from './dashboard/dashboardReducer';


const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer
})

export default rootReducer