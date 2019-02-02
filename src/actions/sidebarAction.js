import axios from 'axios'
export const SET_TOP_STARTED = 'SET_TOP_STARTED'
export const ADD_TOP_SUCCESS = 'ADD_TOP_SUCCESS'
export const ADD_TOP_FAILURE = 'ADD_TOP_FAILURE'
export const LOAD_MORE = 'LOAD_MORE'


export const addTop = () => {
    return dispatch => {
        dispatch(setTopStarted());
        axios
            .post('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=5192b1f2fb3141ed2775dda581d81e76&format=json')
            .then(res => {
                dispatch(addTopSuccess(res.data));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};
const addTopSuccess = top => ({
    type: ADD_TOP_SUCCESS,
    payload: top
});


const setTopStarted = () => ({
    type: SET_TOP_STARTED
})

const addTodoFailure = error => ({
    type: ADD_TOP_FAILURE,
    payload: {
        error
    }
});
export const loadMore = (limit) => ({
    type: LOAD_MORE,
    payload: limit + 5
});