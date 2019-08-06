import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'


export default class Button extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {text, onPress} = this.props

    return (
      <View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text>{text}</Text>
        </TouchableOpacity>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
})
