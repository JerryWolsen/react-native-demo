import IconWithBadge from './IconWithBadge'
import React from 'react'
import { connect } from 'react-redux'

const HomeIconWithBadge = (props) => {

  const { counter } = props
  return <IconWithBadge {...props} badgeCount={counter.count} />;

}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(HomeIconWithBadge)
