import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer  from '../states/rootReducer';


const initialState = {};
const middleware = [thunk, logger];
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    storeEnhancers(
        applyMiddleware(...middleware),
    )
)


export default store;