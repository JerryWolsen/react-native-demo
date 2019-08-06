import * as types from '../actions/actionTypes'


const initialState = {
  count: 0
}

export default function counter(state = initialState, action = {}) {

    switch (action.type) {
      case types.INCREMENT: {
        state.count = state.count + 1
      }
        break
      case types.DECREMENT: {
        state.count = state.count - 1
      }
        break
      default:
        break
    }
    return Object.assign({}, state)
}
