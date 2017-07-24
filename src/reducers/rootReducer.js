import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import login from './login';
import home from './home';
import register from './register';

//将子Reducers合并成大的Reducers
const rootReducer = combineReducers({
    login,
    home,
    register,
    router: routerReducer
});


export default rootReducer;