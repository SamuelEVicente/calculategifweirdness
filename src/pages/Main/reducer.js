import { DUP_LIKE_ERROR, IS_LOADING, LIKE_GIF, ON_WEIRD_VALUE_CHANGE, RESET, SEARCH_VALUE_CHANGED, SET_CURRENT_GIF, TOOL_TIP_OPEN, UNLIKE_GIF } from './actionTypes'

const initialState = {
  searchValue: '',
  likedGifs: [],
  currentGif: {},
  weirdValue: 0,
  loading: false,
  toolTipOpen: false,
  dupLikeError: false,
  likedSearchTerms: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DUP_LIKE_ERROR:
      return {
        ...state,
        dupLikeError: payload
      }
    case IS_LOADING:
      return { ...state, loading: payload }
    case LIKE_GIF:
      return {
        ...state,
        likedGifs: payload.likedGifs,
        likedSearchTerms: payload.likedSearchTerms
      }
    case ON_WEIRD_VALUE_CHANGE:
      return {
        ...state, weirdValue: payload
      }
    case RESET:
      return initialState
    case SEARCH_VALUE_CHANGED:
      return {
        ...state, searchValue: payload
      }
    case SET_CURRENT_GIF:
      return {
        ...state, currentGif: payload
      }
    case TOOL_TIP_OPEN:
      return {
        ...state, toolTipOpen: payload
      }
    case UNLIKE_GIF:
      return {
        ...state,
        likedGifs: payload.likedGifs,
        likedSearchTerms: payload.likedSearchTerms
      }
    default:
      return state
  }
}
