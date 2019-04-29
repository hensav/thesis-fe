import axios from 'axios'

export const START_EXERCISE = 'START_EXERCISE'
export const EXERCISE_STARTED = 'EXERCISE_STARTED'
export const EXERCISE_START_FAILED = 'EXERCISE_START_FAILED'
export const EXERCISE_ENDED = 'EXERCISE_ENDED'

//req to board
export const END_EXERCISE = 'END_EXERCISE'
export const EXERCISE_END_FAILED = 'EXERCISE_END_FAILED'
//

export const DECREMENT_TIME_STARTED = 'DECREMENT_TIME_STARTED'
export const DECREMENT_TIME = 'DECREMENT_TIME'
export const DECREMENT_TIME_ENDED = 'DECREMENT_TIME_ENDED'

export const CHANGE_EXERCISE = 'CHANGE_EXERCISE'
export const CHANGE_TIME = 'CHANGE_TIME'

export const PREP_TIME_STARTED = 'PREP_TIME'
export const DECREMENT_PREP_TIME = 'DECREMENT_PREP_TIME'
export const PREP_TIME_ENDED = 'PREP_TIME_ENDED'

export const REMOVE_RIPPLE = 'REMOVE_RIPPLE'
export const ADD_RIPPLE = 'ADD_RIPPLE'

export const CANCEL = 'CANCEL'

export const startExercise = (exercise, time) => {
  return (dispatch) => {
    dispatch({
      type: START_EXERCISE,
      payload: exercise
    })
    axios.get('http://192.168.4.1:8088/start')
      .then((data) => {
        dispatch({
          type: EXERCISE_STARTED,
          payload: time
        })
        exerciseTimer(time)(dispatch)
      })
      .catch(err => {
        dispatch({
          type: EXERCISE_START_FAILED,
          payload: err
        })
      })
  }
}

export const endExercise = (exercise) => {
  return (dispatch) => {
    dispatch({
      type: END_EXERCISE,
      payload: exercise
    })
    console.log("TRA:DD")
    axios.get('http://192.168.4.1:8088/end')
      .then(({data}) => {
        dispatch({
          type: EXERCISE_ENDED,
          payload: data
        })
      })
      .catch(err => {
        console.log('no api connection')
        dispatch({
          type: EXERCISE_END_FAILED,
          payload: err
        })
      })
  }
}

let exerciseCounter = null

export const exerciseTimer = (time) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT_TIME_STARTED
    })
    exerciseCounter = setInterval(() => {
      console.log('DECREMENT_TIME')
      dispatch({
        type: 'DECREMENT_TIME'
      })
    }, 1000)
    setTimeout(() => {
      clearInterval(exerciseCounter)
      dispatch({
        type: DECREMENT_TIME_ENDED
      })
      endExercise()(dispatch)
    }, time)
  }
}
let prepCounter = null

export const prepTimer = (exercise, time) => {
  return (dispatch) => {
    dispatch({
      type: PREP_TIME_STARTED
    })
    prepCounter = setInterval(() => {
      dispatch({
        type: DECREMENT_PREP_TIME
      })
    }, 1000)
    setTimeout(() => {
      clearInterval(prepCounter)
      dispatch({
        type: PREP_TIME_ENDED
      })
      startExercise(exercise, time)(dispatch)
    }, 5000)
  }
}

export const changeExercise = (exercise) => {
  clearInterval(prepCounter)
  clearInterval(exerciseCounter)
  return {
    type: CHANGE_EXERCISE,
    payload: exercise
  }
}

export const changeTime = (time) => {
  clearInterval(prepCounter)
  clearInterval(exerciseCounter)
  return {
    type: CHANGE_TIME,
    payload: time
  }
}

export const cancel = () => {
  return {
    type: CANCEL,
  }
}
