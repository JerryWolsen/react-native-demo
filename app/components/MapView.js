import React, {Component} from 'react'

import {requireNativeComponent} from 'react-native'
import PropTypes from 'prop-types'

const MSMapView = requireNativeComponent('MSMapView', MapView)

class MapView extends Component {
  render() {
    return <MSMapView{...this.props}/>;
  }
}

MapView.propTypes = {
  posLatitude: PropTypes.number,
  posLongitude: PropTypes.number,
  posName: PropTypes.string,
  posAddress: PropTypes.string
}


export default MapView
