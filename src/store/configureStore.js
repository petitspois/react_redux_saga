import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware, { END } from 'redux-saga'

const history = createHistory()

const routersMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routersMiddleware];
if (process.env.NODE_ENV === `development`) {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  middlewares.push(logger);
}

export default (initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers( applyMiddleware(...middlewares)));
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
