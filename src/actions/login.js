import {easyfetch} from '../utils/NetUtil';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE_OUR = 'LOGIN_FAILURE_OUR';




export const login = (json)=>{
    return (dispatch)=>{
        return easyfetch('login','post',json,'json')
            .then(result=>{
                return dispatch(loginSuccess(result));  
            })
            .catch(error=>{
                console.log(error);
                return dispatch(loginFailure(error));
            });
    }
};

export const fakeAuth = {
  isAuthenticated: true,
}
const loginSuccess=(result)=>({type:LOGIN_SUCCESS,result,loading:false});
const loginFailure=(error)=>({type:LOGIN_FAILURE_OUR,error,loading:false});
