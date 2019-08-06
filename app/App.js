import React from 'react'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import * as reducers from './reducers'
import TabNavigator from './navigationConfiguration'

import {createAppContainer} from 'react-navigation'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)


const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
