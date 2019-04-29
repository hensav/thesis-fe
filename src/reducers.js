import { combineReducers } from "redux"

import exercise from "./components/Exercise/exerciseReducer"
import stats from "./components/Stats/statsReducer"

export default combineReducers({
    exercise,
    stats
})