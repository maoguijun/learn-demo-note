import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE_OUR,
} from '../actions/login';

export default function login(state = {
    loginresult: {},
}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginresult: action.result,
            };
        case LOGIN_FAILURE_OUR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};