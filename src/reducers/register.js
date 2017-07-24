import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE_OUR,
} from '../actions/register';

export default function login(state = {
    registerresult: {},
}, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerresult: action.result,
            };
        case REGISTER_FAILURE_OUR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};