import {easyfetch} from '../utils/NetUtil';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE_OUR = 'REGISTER_FAILURE_OUR';




export const register = (json)=>{
    return (dispatch)=>{
        return easyfetch('users','post',json,'json')
            .then(result=>{
                return dispatch(registerSuccess(result));
            })
            .catch(error=>{
                console.log(error);
                return dispatch(registerFailure(error));
            });
    }
};


const registerSuccess=(result)=>({type:REGISTER_SUCCESS,result,loading:false});
const registerFailure=(error)=>({type:REGISTER_FAILURE_OUR,error,loading:false});
