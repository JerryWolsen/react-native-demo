import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {bindActionCreators} from 'redux'
import Button from '../components/Button'
import {connect} from 'react-redux'
import * as counterActions from '../actions/counterActions'

class CounterApp extends Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
      return {
        title: 'counter',
        headerBackTitle: 'Back',
      }
  }

  render() {
    const {counter, navigation} = this.props
    return (
      <View style={styles.count}>
        <Text>{counter.count}</Text>
        <Button onPress={this.onAdd} text={'add'}/>
        <Button onPress={this.onDel} text={'delete'}/>
        <Button onPress={() => navigation.navigate('Movies')} text={'go to movies'}/>
        <Button
          text="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    )
  }

  onAdd = () => {
    const {counterActions} = this.props
    counterActions.increment()
  }

  onDel = () => {
    const {counterActions} = this.props
    counterActions.decrement()
  }

}

const styles = StyleSheet.create({
  count: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
})

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
