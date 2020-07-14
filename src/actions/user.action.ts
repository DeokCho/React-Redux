import {userConstants} from '../constants'
import {userService} from '../apis'

const userActions = {
    login // 객체, 액션
}

function request(userid:string):object{
    return {type:userConstants.LOGIN_REQUEST, userid}
}
function success(userid:string):object{
    return {type:userConstants.LOGIN_SUCCESS, userid}
}
function failure(userid:string, error:string):object{
    return {type:userConstants.LOGIN_FAIL, userid, error}
}

function login(userid:string, passwd){
    return dispatch =>{
        dispatch(request(userid))
    }
}  // 액션생성기

export default userActions // 내부에서 사용하는 것은 오픈하지 않는다.