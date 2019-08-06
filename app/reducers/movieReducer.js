import * as types from '../actions/actionTypes'


const initialState = {
  loaded: false,
  movies: []
}

export default function movieReducer(state = initialState, action = {}) {

  switch (action.type) {
    case types.FETCH_DATA: {
      state.loaded = true
      state.movies = action.payload
    }
      break
    default:
      break
  }
  return Object.assign({}, state)

}
