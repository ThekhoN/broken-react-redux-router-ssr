export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote // obj {quote, author, tag, submittedBy}
  }
}

export const removeQuote = (id) => {
  return {
    type: 'REMOVE_QUOTE',
    id //remove by id
  }
}

export const updateQuote = (quote) => {
  return {
    type: 'UPDATE_QUOTE',
    quote //conditonal change by id only based on payload
  }
}

//onMount get all quotes
export const initGetQuotes = (quotes) => {
  //console.log('running initGetQuotes. . .');
  //console.log('quotes initGetQuotes:', quotes);
  return {
    type: 'INIT_GET_QUOTES',
    quotes
  }
}

const setAppError = (bool) => {
  return {
    type:'APP_ERROR',
    error:bool
  }
}

const setAppLoading = (bool) => {
  return {
    type:'APP_LOADING',
    loading:bool
  }
}

const setAppLoaded = (bool) => {
  return {
    type:'APP_LOADED',
    loaded:bool
  }
}

export const onfetchQuotesDispatch = (url) =>  {
  return (dispatch) => {
      //dispatch 'APP_LOADING' true
      dispatch(setAppLoading(true))
      fetch(url)
      .then(response => {
        if(!response.ok){
          throw Error(response.statusText)
        }
        //dispatch 'APP_LOADING' is loading false
        dispatch(setAppLoading(false))
        return response
      })
      .then(response => response.json())
      .then(items => {
        //console.log('items from fetch: ', items);
        //dispatch 'INIT_GET_QUOTES'
        dispatch(initGetQuotes(items))
        dispatch(setAppLoaded(true))
      })
      .catch(err => {
        //dispatch 'APP_ERRORED'
        dispatch(setAppError(true))
        console.log('fetch error: ', err);
      })
  }
}
