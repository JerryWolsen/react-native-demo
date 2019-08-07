import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Platform, Text} from "react-native"
import MapView from '../components/MapView'

export default class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.setting}>
        {Platform.OS === 'ios' ?
        <MapView width={'100%'}
                 height={'100%'}
                 backgroundColor={'white'}
                 posLatitude={39.152079}
                 posLongitude={117.178526}
                 posAddress={'陆家嘴金融广场'}
                 posName={'第三方调查'}/> : <Text >Settings</Text>}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
})
