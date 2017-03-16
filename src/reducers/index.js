import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import login from './login';



const rootReducer = combineReducers({
    login,
    router: routerReducer
})

export default rootReducer;