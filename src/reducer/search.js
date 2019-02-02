import {
    START_SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,

} from '../actions/searchAction'

const initialState = {
    loading: false,
    tracks: {},
    err: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_SEARCH:
            return {
                ...state,
                loading: false
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: true,
                tracks: action.payload,
                err: 0
            }
        case SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload
            }

        default:
            return state;
    }
}