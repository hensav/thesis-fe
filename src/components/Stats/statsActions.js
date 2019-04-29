import axios from 'axios'

export const FETCH_STATS = 'FETCH_STATS'
export const STATS_FETCHED = 'STATS_FETCHED'
export const FETCH_STATS_ERROR = 'FETCH_STATS_ERROR'

export const fetchStats = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_STATS
    })
    axios.get('http://localhost:3000/api/list')
      .then(({data}) => {
      console.log(data)
        dispatch({
          type: STATS_FETCHED,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_STATS_ERROR,
          payload: err
        })
      })
  }
}
