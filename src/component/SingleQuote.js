import React, {Component} from 'react'

import QuoteComponent from './QuoteComponent'
import Loading from './Loading'

export default class SingleQuote extends Component {
  render(){
    const {params, quotes, app} = this.props
    const loaded = app.loaded
    const currentQuote = quotes.filter(quote => {
      return quote.id === params.quoteId
    })[0]

    //console.log('currentQuote: ', currentQuote);
    return (<div className='singleQuote'>
      {
        loaded ? <QuoteComponent currentQuote={currentQuote}/> : <Loading/>
      }
    </div>)
  }
}
