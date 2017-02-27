import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import quotes from './quotes'
import app from './app'

const rootReducer = combineReducers({
  app,
  quotes,
  routing: routerReducer
})

export default rootReducer
