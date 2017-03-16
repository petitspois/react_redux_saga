import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './src/store/configureStore'
import rootSaga from './src/sagas'
import App from './src/containers/App'
const history = createHistory()
const store = configureStore(window.__INITIAL_STATE__ || {})
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
        <ConnectedRouter history={history}>
                <App/>
        </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)