import {
    GETHOMEADS_SUCCESS,
    GETHOMEADS_FAILURE,
} from '../actions/home';

export default function home(state = {
    homeAds: {},
}, action) {
    switch (action.type) {
        case GETHOMEADS_SUCCESS:
            return {
                ...state,
                homeAds: action.result,
            };
        case GETHOMEADS_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};