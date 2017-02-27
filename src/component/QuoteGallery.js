import React, {Component} from 'react'
import {Link} from 'react-router'
import Loading from './Loading'

export default class QuoteGallery extends Component {
  render(){
    const {quotes, app} = this.props
    const loaded = app.loaded
    return (<div className='quoteGallery'>
      {
        loaded ? <QuoteGalleryComponent quotes={quotes}/> : <Loading/>
      }
    </div>)
  }
}


const QuoteGalleryComponent = ({quotes}) => {
  console.log('quotes inside QuoteGalleryComponent: ', quotes);
  return (<ul>
    {
      quotes.map((quote) => (<li className='quoteUnit m-raised' key={quote.id}>
        <Link to={`/quote/${quote.id}`}>{quote.quote}</Link>
    </li>))
    }
</ul>)
}
