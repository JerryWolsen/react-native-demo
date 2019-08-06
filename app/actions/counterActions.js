
import * as types from './actionTypes'

export function increment() {

  return dispatch => {
    dispatch({type: types.INCREMENT})
    const dispatchIncrement =  () => {
      dispatch({type: types.INCREMENT})
    }
   // setTimeout(dispatchIncrement, 1000)
  }
}

export function decrement() {

  return {
    type: types.DECREMENT
  }

}
