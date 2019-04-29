import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStats } from './statsActions'
import _Stats from './Stats'

class Stats extends Component {
  render () {
    return <_Stats {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    stats: state.stats.stats,
  })
}

export default connect(mapStateToProps, { fetchStats })(Stats)
