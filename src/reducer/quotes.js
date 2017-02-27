const quotes = (state=[], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state;
    case 'REMOVE_QUOTE':
      return state;
    case 'UPDATE_QUOTE':
      return state;
    case 'INIT_GET_QUOTES':
      //return [...action.quotes]
      const newState = action.quotes
      return newState;
    default:
      return state;
  }
}

export default quotes
