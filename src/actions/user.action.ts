import {userConstants} from '../constants'
import {userService} from '../apis'
import {alertActions} from "./alert.actions";

const userActions = {
    login, // 객체, 액션
    join
}

function join(userid, passwd, passwd_repeat){
    alert(`ID: ${userid} PW:${passwd} passwd-repeat:${passwd_repeat}`)
    return {type:userConstants.JOIN_REQUEST, userid}
}
function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)
    userService.loginService(userid, password)

    return dispatch =>{
        dispatch(request(userid))
    }

    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
}  // 액션생성기

export default userActions // 내부에서 사용하는 것은 오픈하지 않는다.