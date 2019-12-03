import { SEARCH_VALUE_CHANGED, LIKE_GIF, UNLIKE_GIF, SET_CURRENT_GIF, ON_WEIRD_VALUE_CHANGE, IS_LOADING, RESET, TOOL_TIP_OPEN, DUP_LIKE_ERROR } from './actionTypes';
import axios from "axios";
const API_KEY = "zUUVU2ufbCV0ZxvID4iaMHn1yElVFqfm";
const SEARCH_ENDPOINT = "http://api.giphy.com/v1/gifs/translate";

export const addToLikedGifs = (payload) => ({
  type: LIKE_GIF,
  payload
})

export const apiRequest = (searchTerm, weirdness) => async (dispatch) => {
  try {
    let response = await axios.get(SEARCH_ENDPOINT + `?s=${searchTerm}&weirdness=${weirdness}&api_key=${API_KEY}`)
    let { data, meta } = await response.data
    dispatch(searchResultChanged(data, meta, weirdness, searchTerm))
  } catch (error) {
    console.log(error)
  }
}

export const unlikeGif = (payload) => ({
  type: UNLIKE_GIF,
  payload
})

export const onWeirdValueChange = (payload) => ({
  type: ON_WEIRD_VALUE_CHANGE,
  payload
})

export const isLoading = (payload) => ({
  type: IS_LOADING,
  payload
})

export const searchValueChanged = (payload) => ({
  type: SEARCH_VALUE_CHANGED,
  payload
})

export const resetResult = (payload) => ({
  type: SET_CURRENT_GIF,
  payload
})

export const reset = () => ({
  type: RESET
})

export const openToolTip = (payload) => ({
  type: TOOL_TIP_OPEN,
  payload
})

export const dupLikeError = (payload) => ({
  type: DUP_LIKE_ERROR,
  payload
})


export function searchResultChanged(data, meta, weirdness, searchTerm) {
  return {
    type: SET_CURRENT_GIF,
    payload: {
      id: data.id,
      title: data.title,
      url: data.images ? data.images.downsized_medium.url : undefined,
      weirdness: weirdness,
      meta: meta,
      searchTerm: searchTerm
    }
  }
}