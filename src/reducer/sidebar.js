import {
    SET_TOP_STARTED,
    ADD_TOP_SUCCESS,
    ADD_TOP_FAILURE,
    LOAD_MORE
} from '../actions/sidebarAction'

const initialState = {
    charts: {},
    loading: false,
    error: [],
    limit: 5,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_STARTED:
            return {
                ...state,
                loading: true
            }
        case ADD_TOP_SUCCESS:
            return {
                ...state,
                charts: action.payload,
                loading: false,
                error: false
            }
        case ADD_TOP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOAD_MORE:
            return {
                ...state,
                limit: action.payload
            }
        default:
            return state;
    }
}