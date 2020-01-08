import * as constants from '../constants'

const initialState = {
  movies_list: [],
  movies_list_search: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.MOVIES_GET:
      return { 
        ...state, 
        movies_list: action.payload 
      }
    case constants.MOVIES_SET:
      return { 
        ...state, 
        movies_list_search: action.payload 
      }
    case constants.MOVIES_LOADING:
      return { 
        ...state, 
        isLoading: action.bool 
      }
    default:
      return state
  }
}