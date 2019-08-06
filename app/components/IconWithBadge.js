import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class IconWithBadge extends Component {

  static defaultProps= {
    badgeCount: 0
  }

  render() {
    const { name, badgeCount, color, size } = this.props
    return (
      <View style={styles.icon}>
        <Ionicons name={name} size={size} color={color} />
        { badgeCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.text}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    margin: 5
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})


