import React from 'react'

const Quote = ({quote}) => (<div className='quote'>&#8220; {quote}  &#8221;</div>)

const Author = ({author}) => (<div className='quoteAuthor'>- {author}</div>)

const SubmittedBy = ({submittedBy}) => (<div className='submittedBy'>submitted by: <br/> {submittedBy}</div>)

const Tag = ({tag}) => {
  console.log('tag inside Tag: ', tag);
  return (<div className='tag'>
    <ul>
        {
          tag.map((t, i)=>(<li key={i}>{t}</li>))
        }
    </ul>
  </div>)
}

const QuoteComponent = ({currentQuote}) => {
  const {quote, author, submittedBy, tag} = currentQuote
  //console.log('tag inside QuoteComponent: ', tag);
  return (<div className='quoteComponent'>
      <Quote quote={quote}/>
      <Author author={author}/>
      <SubmittedBy submittedBy={submittedBy}/>
      <Tag tag={tag}/>
  </div>)
}

export default QuoteComponent
