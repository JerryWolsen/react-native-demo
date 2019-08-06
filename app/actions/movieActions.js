
import * as types from './actionTypes'

const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json"

export function fetchMovies() {

  return async (dispatch) => {
    let response = await fetch(REQUEST_URL)
    let responseData = await response.json()
    dispatch({type: types.FETCH_DATA, payload: responseData.movies})
  }
  
}

