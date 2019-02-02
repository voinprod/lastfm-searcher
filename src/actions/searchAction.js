import axios from 'axios'
export const START_SEARCH = 'START_SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

//Use one method

export const startSeacrch = (params) => {
    return dispatch => {
        dispatch({
            type: START_SEARCH
        })
        axios.post(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${params}&api_key=5192b1f2fb3141ed2775dda581d81e76&format=json`)
            .then(res => {
                dispatch({
                    type: SEARCH_SUCCESS,
                    payload: res.data.results.trackmatches
                })
            }).catch(err => {
                dispatch({
                    type: SEARCH_FAILURE,
                    payload: err.message
                })
            })
    }
}
