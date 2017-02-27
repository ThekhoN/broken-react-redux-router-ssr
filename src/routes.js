import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import Main from './component/Main';
import SingleQuote from './component/SingleQuote'
import QuoteGallery from './component/QuoteGallery'
import {history} from './store/store'


/*
const routes = () => {
  return (<Router history={history}>
      <Route path='/' component={Main}>
      <IndexRoute component={QuoteGallery}/>
        <Route path='/quote/:quoteId' component={SingleQuote}/>
      </Route>
    </Router>)
}
*/

const getRoutes = () => {
  return (<Router history={history}>
      <Route path='/' component={Main}>
      <IndexRoute component={QuoteGallery}/>
        <Route path='/quote/:quoteId' component={SingleQuote}/>
      </Route>
    </Router>)
}

export default getRoutes
