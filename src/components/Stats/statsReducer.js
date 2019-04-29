import {
  FETCH_STATS,
  STATS_FETCHED,
  FETCH_STATS_ERROR
} from './statsActions'

export default function (state = {
  loading: false,
  stats: []
}, action) {
  switch (action.type) {
    case FETCH_STATS : {
      return {
        ...state,
        loading: true
      }
    }
    case STATS_FETCHED : {
      return {
        ...state,
        loading: true,
        stats: action.payload
      }
    }
    case FETCH_STATS_ERROR : {
      return {
        ...state,
        loading: true,
        stats: action.payload
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}
