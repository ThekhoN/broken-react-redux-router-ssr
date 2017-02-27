import {createStore, applyMiddleware, compose} from 'redux'
//import {browserHistory} from 'react-router'

import {syncHistoryWithStore} from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducer/rootReducer'
import quotes from '../data/quotes'

const defaultState = {
  quotes,
  app: {
    error: false,
    loading: false,
    loaded: false
  }
}

/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(thunk)
))
*/

import createBrowserHistory from 'history/lib/createBrowserHistory'
const browserHistory = createBrowserHistory()

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

export default store

export const history = syncHistoryWithStore(browserHistory, store)
