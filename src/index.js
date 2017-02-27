import React from 'react';
import {render} from 'react-dom';
//import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'

//import Main from './component/Main';
//import SingleQuote from './component/SingleQuote'
//import QuoteGallery from './component/QuoteGallery'
//import {history} from './store/store'
import './index.css';

import store from './store/store'
import getRoutes from './routes'

const router = (<Provider store={store}>
  {getRoutes()}
</Provider>)

render(router,
  document.getElementById('root')
);
