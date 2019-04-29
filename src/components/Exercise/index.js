import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startExercise, decrement, endTimer, changeExercise, changeTime, prepTimer, cancel } from './exerciseActions'
import _Exercise from './Exercise'

class Exercise extends Component {
  render () {
    return <_Exercise {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    data: state.exercise.data,
    loading: state.exercise.loading,
    time: state.exercise.time,
    timerText: state.exercise.timerText,
    error: state.exercise.error,
    activeExercise: state.exercise.activeExercise,
    activeTime: state.exercise.activeTime,
    started: state.exercise.started,
    prepTime: state.exercise.prepTime,
    sound: state.exercise.sound,
    soundPlaying: state.exercise.soundPlaying,
    ripple: state.exercise.ripple,
    initialTime: state.exercise.initialTime
  })
}

export default connect(mapStateToProps, { startExercise, decrement, endTimer, changeExercise, changeTime, prepTimer, cancel })(Exercise)
